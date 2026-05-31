'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

const products = [
  'Bột Sắn Dây Nguyên Chất 500g — 120.000₫',
  'Bột Sắn Dây Nguyên Chất 1kg — 200.000₫',
  'Combo 3 túi 500g (Tặng 1) — 360.000₫',
  'Bột Sắn Dây Hộp Quà 2 x 500g (có bọc quà) — 270.000₫',
]

const MoMoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#A50064"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">M</text>
  </svg>
)

const ZaloIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#0068FF"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold" fontFamily="Arial, sans-serif">Z</text>
  </svg>
)

const BankIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#1a7f4b"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif">🏦</text>
  </svg>
)

const CodIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="40" height="40" rx="10" fill="#f59e0b"/>
    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="18" fontFamily="Arial, sans-serif">💵</text>
  </svg>
)

const paymentMethods = [
  { id: 'momo', label: 'MoMo', Icon: MoMoIcon, account: '0353 795 785' },
  { id: 'zalo', label: 'ZaloPay', Icon: ZaloIcon, account: '0353 795 785' },
  { id: 'bank', label: 'Chuyển khoản', Icon: BankIcon, account: 'VCB — 1234567890 — Nguyễn Thị Năm' },
  { id: 'cod', label: 'COD', Icon: CodIcon, account: 'Trả tiền khi nhận hàng' },
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get('product') || ''

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    product: preselectedProduct
      ? products.find(p => p.startsWith(preselectedProduct)) || products[0]
      : products[0],
    quantity: '1',
    payment: 'momo',
    note: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Lỗi không xác định')
      }
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại hoặc liên hệ trực tiếp qua Zalo.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-4">
        <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-brand-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Đặt hàng thành công! 🎉</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Cảm ơn <strong>{form.name}</strong>! Chúng tôi sẽ liên hệ xác nhận đơn hàng trong vòng 30 phút qua số <strong>{form.phone}</strong>.
        </p>
        <div className="bg-brand-50 rounded-2xl p-6 max-w-sm mx-auto text-left mb-8">
          <h3 className="font-bold text-gray-800 mb-3">Thông tin thanh toán:</h3>
          {(() => {
            const pm = paymentMethods.find(p => p.id === form.payment)
            return pm ? (
              <div className="flex items-center gap-3">
                <pm.Icon />
                <div>
                  <div className="font-semibold text-gray-700">{pm.label}</div>
                  <div className="text-sm text-gray-500 font-mono">{pm.account}</div>
                </div>
              </div>
            ) : null
          })()}
        </div>
        <button onClick={() => setSubmitted(false)} className="btn-outline">
          Đặt thêm đơn mới
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Họ và tên *</label>
          <input
            type="text" name="name" required value={form.name} onChange={handleChange}
            placeholder="Nguyễn Văn A"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Số điện thoại *</label>
          <input
            type="tel" name="phone" required value={form.phone} onChange={handleChange}
            placeholder="0353 795 785"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Địa chỉ giao hàng *</label>
        <input
          type="text" name="address" required value={form.address} onChange={handleChange}
          placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sản phẩm *</label>
          <select name="product" value={form.product} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white">
            {products.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Số lượng *</label>
          <select name="quantity" value={form.quantity} onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition bg-white">
            {['1','2','3','4','5','6','10'].map(n => <option key={n} value={n}>{n} sản phẩm</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">Phương thức thanh toán *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {paymentMethods.map(pm => (
            <label key={pm.id}
              className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                form.payment === pm.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'
              }`}>
              <input type="radio" name="payment" value={pm.id} checked={form.payment === pm.id}
                onChange={handleChange} className="sr-only" />
              <pm.Icon />
              <span className="text-xs font-semibold text-gray-700 text-center">{pm.label}</span>
              {form.payment === pm.id && <CheckCircle className="w-4 h-4 text-brand-500 absolute top-2 right-2" />}
            </label>
          ))}
        </div>
        {form.payment && (
          <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm">
            <span className="font-semibold text-gray-700">Thông tin thanh toán: </span>
            <span className="text-gray-500 font-mono">{paymentMethods.find(p => p.id === form.payment)?.account}</span>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ghi chú (tùy chọn)</label>
        <textarea name="note" value={form.note} onChange={handleChange} rows={3}
          placeholder="Ghi chú về đơn hàng, thời gian giao hàng, hoặc yêu cầu đặc biệt..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
          ⚠️ {error}
        </div>
      )}
      <button type="submit" disabled={loading}
        className="w-full btn-primary justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
        {loading ? '⏳ Đang gửi đơn hàng...' : 'Xác nhận đặt hàng 🛍️'}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút trong giờ hành chính
      </p>
    </form>
  )
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-gray-400 text-sm py-8 text-center">Đang tải form...</div>}>
      <ContactFormInner />
    </Suspense>
  )
}
