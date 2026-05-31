import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-3">
            <Leaf className="w-5 h-5 text-brand-300" />
            Sắn Dây Quê
          </div>
          <p className="text-brand-200 text-sm leading-relaxed max-w-xs">
            Bột sắn dây nguyên chất từ gia đình, sản xuất thủ công truyền thống. Chứng nhận VSATTP. Tốt cho sức khỏe cả gia đình.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-brand-700 hover:bg-brand-500 flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-brand-700 hover:bg-brand-500 flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Danh mục</h4>
          <ul className="space-y-2 text-sm text-brand-200">
            {[
              { href: '/', label: 'Trang chủ' },
              { href: '/san-pham', label: 'Sản phẩm' },
              { href: '/blog', label: 'Blog Sức Khỏe' },
              { href: '/ve-chung-toi', label: 'Về chúng tôi' },
              { href: '/lien-he', label: 'Liên hệ & Đặt hàng' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
              <a href="tel:0353795785" className="hover:text-white transition-colors">0353 795 785</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
              <a href="mailto:lienhe@sandayque.vn" className="hover:text-white transition-colors">lienhe@sandayque.vn</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-400" />
              <span>99 Vạn Xuân, Đan Phượng, Hà Nội</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-brand-400">
          <p>© 2024 Sắn Dây Quê. Tất cả quyền được bảo lưu.</p>
          <p>Giấy phép VSATTP số: 1234/2024/ATTP-ĐK</p>
        </div>
      </div>
    </footer>
  )
}
