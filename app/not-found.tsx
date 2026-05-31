import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-brand-200 mb-4">404</div>
        <div className="text-5xl mb-6">🌿</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Trang không tồn tại</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Trang bạn đang tìm kiếm có thể đã bị di chuyển hoặc không tồn tại. Hãy quay lại trang chủ nhé!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" /> Trang chủ
          </Link>
          <Link href="/san-pham" className="btn-outline">
            Xem sản phẩm <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
