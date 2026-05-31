import type { Metadata } from 'next'
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Clock, Truck } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Đặt Hàng & Liên Hệ | Sắn Dây Quê',
  description: 'Đặt mua bột sắn dây nguyên chất trực tuyến. Xác nhận trong 30 phút, giao hàng toàn quốc, miễn phí ship đơn từ 300k.',
  keywords: 'đặt hàng bột sắn dây, mua bột sắn dây online, liên hệ sắn dây quê',
  openGraph: {
    title: 'Đặt Hàng Bột Sắn Dây | Sắn Dây Quê',
    description: 'Đặt mua bột sắn dây nguyên chất. Xác nhận trong 30 phút, giao toàn quốc.',
    url: 'https://sandayque.vn/lien-he',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4">📦 Đặt hàng</span>
          <h1 className="section-title">Đặt Hàng & Liên Hệ</h1>
          <p className="text-gray-500 text-lg">Điền form bên dưới, chúng tôi xác nhận trong 30 phút</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Thông tin đặt hàng</h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-sm p-6">
              <h3 className="font-bold text-gray-800 mb-5">Liên hệ trực tiếp</h3>
              <div className="space-y-4">
                <a href="tel:0353795785" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                  <div className="w-9 h-9 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Gọi điện</div>
                    <div className="text-brand-600">0353 795 785</div>
                  </div>
                </a>
                <a href="https://zalo.me/0353795785" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                  <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Zalo</div>
                    <div className="text-blue-600">0353 795 785</div>
                  </div>
                </a>
                <a href="mailto:lienhe@sandayque.vn" className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-600 transition-colors">
                  <div className="w-9 h-9 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-brand-600">lienhe@sandayque.vn</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-9 h-9 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Địa chỉ</div>
                    <div className="text-gray-500">99 Vạn Xuân, Đan Phượng,<br />Hà Nội</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-brand-500" />
                <h3 className="font-bold text-gray-800">Giờ làm việc</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Thứ 2 — Thứ 6</span>
                  <span className="font-semibold text-brand-600">8:00 — 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thứ 7 — Chủ nhật</span>
                  <span className="font-semibold text-brand-600">8:00 — 18:00</span>
                </div>
              </div>
            </div>

            {/* Export / International */}
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-6 text-white">
              <div className="text-2xl mb-2">🌏</div>
              <h3 className="font-bold text-white mb-2">Xuất khẩu quốc tế</h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-4">
                Chúng tôi sẵn sàng hợp tác với các nhà phân phối, cửa hàng thực phẩm Việt và siêu thị châu Á tại Mỹ, Úc, EU, Nhật, Hàn.
              </p>
              <ul className="space-y-1.5 text-sm text-brand-100 mb-4">
                <li>✅ Đóng gói theo yêu cầu (OEM/ODM)</li>
                <li>✅ Hồ sơ chứng nhận xuất khẩu đầy đủ</li>
                <li>✅ MOQ linh hoạt từ 50kg</li>
                <li>✅ Hỗ trợ logistics quốc tế</li>
              </ul>
              <a
                href="mailto:lienhe@sandayque.vn?subject=Hợp tác xuất khẩu bột sắn dây"
                className="inline-block w-full text-center bg-white text-brand-700 font-semibold text-sm py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
              >
                📧 Gửi yêu cầu hợp tác
              </a>
            </div>

            <div className="bg-brand-50 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Truck className="w-4 h-4 text-brand-600" />
                <h3 className="font-bold text-gray-800">Chính sách vận chuyển</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" /> Giao toàn quốc qua GHN, GHTK</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" /> <strong>Miễn phí ship</strong> đơn từ 300.000₫</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" /> Giao trong 2–4 ngày làm việc</li>
                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" /> Hoàn tiền 100% nếu sản phẩm lỗi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale / Export section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-4">🌏 B2B & Xuất khẩu</span>
            <h2 className="section-title">Mua Số Lượng Lớn & Hợp Tác Xuất Khẩu</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Chúng tôi sẵn sàng làm việc với các nhà phân phối, siêu thị và đối tác quốc tế tại Mỹ, Úc, Nhật, Hàn, EU
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📦', title: 'MOQ linh hoạt', desc: 'Từ 50kg cho đơn hàng nội địa, từ 200kg cho xuất khẩu. Giá giảm theo sản lượng.' },
              { icon: '🏷️', title: 'OEM / Private Label', desc: 'Đóng gói theo thương hiệu riêng của bạn. Thiết kế bao bì, in logo theo yêu cầu.' },
              { icon: '📋', title: 'Chứng nhận đầy đủ', desc: 'VSATTP, kiểm nghiệm độc lập, CO/CQ sẵn sàng cho thủ tục hải quan quốc tế.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-50 rounded-3xl p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-brand-800 to-brand-950 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-4">Liên hệ hợp tác ngay</h3>
              <ul className="space-y-3 text-brand-100 text-sm mb-6">
                <li className="flex items-start gap-2">✅ Báo giá trong vòng 24 giờ</li>
                <li className="flex items-start gap-2">✅ Mẫu thử miễn phí cho đơn hàng từ 100kg</li>
                <li className="flex items-start gap-2">✅ Hỗ trợ logistics & thủ tục xuất khẩu</li>
                <li className="flex items-start gap-2">✅ Thanh toán linh hoạt: T/T, L/C, DP</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:lienhe@sandayque.vn?subject=Yêu cầu báo giá số lượng lớn / Hợp tác xuất khẩu"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors text-sm"
                >
                  📧 Gửi email báo giá
                </a>
                <a
                  href="https://zalo.me/0353795785"
                  className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-500 transition-colors text-sm"
                >
                  💬 Chat Zalo ngay
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-4 text-lg">Bảng giá tham khảo</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-brand-200 border-b border-white/20">
                    <th className="text-left pb-2">Số lượng</th>
                    <th className="text-right pb-2">Giá/kg</th>
                    <th className="text-right pb-2">Tiết kiệm</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    { qty: '1–10 kg', price: '160.000₫', save: '—' },
                    { qty: '10–50 kg', price: '145.000₫', save: '9%' },
                    { qty: '50–200 kg', price: '130.000₫', save: '19%' },
                    { qty: '200kg+', price: 'Liên hệ', save: '25%+' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-2 text-brand-100">{row.qty}</td>
                      <td className="py-2 text-right font-semibold">{row.price}</td>
                      <td className="py-2 text-right text-brand-300">{row.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-brand-300 mt-3">* Giá chưa bao gồm phí vận chuyển. Liên hệ để nhận báo giá chính xác.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
