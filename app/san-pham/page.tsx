import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sản Phẩm | Sắn Dây Quê',
  description: 'Mua bột sắn dây nguyên chất 500g, 1kg, combo tiết kiệm. Không phụ gia, có chứng nhận VSATTP. Giao hàng toàn quốc.',
  keywords: 'bột sắn dây nhà làm, bột sắn quê, mua bột sắn dây nguyên chất, bột sắn dây ta, bột sắn dây 500g, bột sắn dây 1kg',
  openGraph: {
    title: 'Sản Phẩm Bột Sắn Dây Nguyên Chất | Sắn Dây Quê',
    description: 'Bột sắn dây nguyên chất từ gia đình 3 thế hệ. Không phụ gia, có chứng nhận VSATTP.',
    url: 'https://sandayque.com/san-pham',
  },
}

const products = [
  {
    id: 1,
    name: 'Bột Sắn Dây Nguyên Chất 500g',
    price: 150000,
    originalPrice: 180000,
    image: '/images/bot-san-day.webp',
    badge: 'Bán chạy',
    rating: 4.9,
    reviews: 128,
    description: 'Thích hợp cho cá nhân hoặc gia đình nhỏ. Dùng trong 2–3 tuần.',
    features: ['Túi zip khóa kín', 'Bảo quản 12 tháng', 'Hướng dẫn sử dụng kèm theo'],
  },
  {
    id: 2,
    name: 'Bột Sắn Dây Nguyên Chất 1kg',
    price: 270000,
    originalPrice: 320000,
    image: '/images/san-day-drink.webp',
    badge: 'Tiết kiệm',
    rating: 4.8,
    reviews: 96,
    description: 'Lựa chọn kinh tế cho gia đình. Tiết kiệm hơn so với mua 2 túi 500g.',
    features: ['Hộp carton chắc chắn', 'Bảo quản 12 tháng', 'Tặng kèm muỗng đong'],
  },
  {
    id: 3,
    name: 'Combo 3 túi 500g (Tặng 1)',
    price: 450000,
    originalPrice: 600000,
    image: '/images/san-day-nuoc.jpg',
    badge: 'Ưu đãi nhất',
    rating: 5.0,
    reviews: 54,
    description: 'Mua 3 tặng 1 — tiết kiệm tối đa. Lý tưởng để dùng lâu dài hoặc làm quà.',
    features: ['4 túi 500g', 'Tiết kiệm 25%', 'Thiệp cảm ơn', 'Miễn phí giao hàng'],
  },
  {
    id: 4,
    name: 'Bột Sắn Dây Hộp Quà 2 x 500g',
    price: 330000,
    originalPrice: 380000,
    image: '/images/san-day-drink2.webp',
    badge: 'Quà tặng',
    rating: 4.9,
    reviews: 41,
    description: 'Hộp quà sang trọng, thích hợp biếu tặng người thân dịp lễ, tết. (2 x 500g + bọc quà)',
    features: ['2 túi 500g', 'Bọc quà +30k', 'Thiệp chúc mừng', 'Miễn phí in tên'],
  },
]

const uses = [
  { emoji: '🥤', title: 'Nước giải khát', desc: 'Pha 1 muỗng canh với nước sôi, thêm chút đường phèn. Uống sau bữa trưa hoặc chiều mát.' },
  { emoji: '🍜', title: 'Nấu chè', desc: 'Chè bắp, chè bí đỏ, chè sen — thêm bột sắn dây tạo độ sánh tự nhiên, ngọt thanh, giải nhiệt.' },
  { emoji: '💆', title: 'Trị nám, làm đẹp da', desc: 'Trộn 3 thìa bột với lòng trắng trứng, đắp mặt 15 phút, 2-3 lần/tuần. Giảm nám, sáng da.' },
  { emoji: '🫙', title: 'Giải độc sau tiệc', desc: 'Pha 20g bột với 300ml nước ấm uống ngay sau khi uống rượu. Bảo vệ gan, giảm say.' },
  { emoji: '⚖️', title: 'Hỗ trợ giảm cân', desc: 'Pha bột với nước + vài giọt chanh, uống trước bữa ăn 20 phút. Không cholesterol, không chất béo.' },
  { emoji: '🍳', title: 'Nấu ăn & làm bánh', desc: 'Thay thế bột mì hoặc bột bắp để làm dày súp, sốt. Không chứa gluten, phù hợp người ăn kiêng.' },
]

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4">🛍️ Cửa hàng</span>
          <h1 className="section-title">Sản Phẩm Của Chúng Tôi</h1>
          <p className="text-gray-500 text-lg">Bột sắn dây nguyên chất — nhiều lựa chọn phù hợp nhu cầu của bạn</p>
        </div>
      </section>

      {/* Products grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map(p => (
              <Link
                key={p.id}
                href={`/lien-he?product=${encodeURIComponent(p.name)}`}
                className="card flex flex-col md:flex-row overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full md:w-48 h-52 md:h-auto flex-shrink-0">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-brand-600 transition-colors">{p.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">{p.rating} ({p.reviews} đánh giá)</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{p.description}</p>
                    <ul className="space-y-1 mb-4">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <span className="text-2xl font-bold text-brand-600">
                        {p.price.toLocaleString('vi-VN')}₫
                      </span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {p.originalPrice.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    <span className="btn-primary text-sm py-2 px-5">
                      <ShoppingBag className="w-4 h-4" /> Đặt mua
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Cách Dùng Bột Sắn Dây</h2>
          <p className="section-subtitle">Đa dạng công dụng trong bữa ăn hàng ngày</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {uses.map((u, i) => (
              <div key={i} className="p-6 bg-brand-50 rounded-2xl hover:bg-brand-100 transition-colors">
                <div className="text-4xl mb-3">{u.emoji}</div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{u.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="bg-brand-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chứng Nhận & Đảm Bảo</h2>
          <p className="text-gray-500 mb-10">Sản phẩm được kiểm định và cấp phép bởi các cơ quan uy tín</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Chứng nhận VSATTP', subtitle: 'Số: 1234/2024/ATTP-ĐK', desc: 'Cấp bởi Cục An Toàn Thực Phẩm - Bộ Y Tế' },
              { icon: '🔬', title: 'Kiểm nghiệm chất lượng', subtitle: 'Vilas 1234', desc: 'Phân tích tại phòng lab được Bộ KH&CN công nhận' },
              { icon: '🌿', title: 'Không chất bảo quản', subtitle: '100% Tự Nhiên', desc: 'Không phụ gia, không tẩy trắng, không hóa chất' },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-gray-800">{c.title}</h3>
                <div className="text-brand-600 text-sm font-semibold mt-1 mb-2">{c.subtitle}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 text-white py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng đặt hàng?</h2>
          <p className="text-brand-100 mb-8">Giao hàng toàn quốc. Hoàn tiền nếu không hài lòng.</p>
          <Link href="/lien-he" className="bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors">
            Đặt hàng ngay <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
