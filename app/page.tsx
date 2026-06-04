import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Star, Truck, Shield, Leaf, ArrowRight, Quote } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Bột Sắn Dây Nguyên Chất 500g',
    price: '150.000₫',
    originalPrice: '180.000₫',
    image: '/images/bot-san-day-nguyen-chat.png',
    badge: 'Bán chạy',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Bột Sắn Dây Nguyên Chất 1kg',
    price: '270.000₫',
    originalPrice: '320.000₫',
    image: '/images/san-day-drink.webp',
    badge: 'Tiết kiệm',
    rating: 4.8,
    reviews: 96,
  },
  {
    id: 3,
    name: 'Combo 3 túi 500g',
    price: '450.000₫',
    originalPrice: '600.000₫',
    image: '/images/san-day-que-bottle.png',
    badge: 'Ưu đãi',
    rating: 5.0,
    reviews: 54,
  },
]

const benefits = [
  { icon: '🌿', title: 'Nguyên chất 100%', desc: 'Không phụ gia, không chất bảo quản, không tẩy trắng' },
  { icon: '🏡', title: 'Sản xuất thủ công', desc: 'Quy trình truyền thống của gia đình 3 thế hệ' },
  { icon: '📋', title: 'Chứng nhận VSATTP', desc: 'Được cấp phép bởi Cục An Toàn Thực Phẩm' },
  { icon: '❤️', title: 'Tốt cho sức khỏe', desc: 'Thanh nhiệt, giải độc, tốt cho tiêu hóa' },
]

const testimonials = [
  {
    name: 'Chị Lan Anh',
    location: 'TP. Hồ Chí Minh',
    text: 'Mình dùng bột sắn dây Sắn Dây Quê được 3 tháng, bột mịn, thơm tự nhiên, pha lên ngon hơn hẳn hàng ngoài chợ. Cả nhà đều thích!',
    rating: 5,
  },
  {
    name: 'Anh Minh Tuấn',
    location: 'Hà Nội',
    text: 'Tin tưởng vì có chứng nhận VSATTP và quy trình sản xuất rõ ràng. Đã mua 5 lần rồi, lần nào cũng đều chất lượng.',
    rating: 5,
  },
  {
    name: 'Chị Thu Hương',
    location: 'Đà Nẵng',
    text: 'Giao hàng nhanh, đóng gói cẩn thận, bột không bị vón cục. Mùi tự nhiên rất thơm, không có mùi hóa chất như một số loại khác.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-earth-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-400 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-earth-300 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="badge mb-4">🌿 Sản phẩm gia đình 3 thế hệ</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bột Sắn Dây<br />
              <span className="text-brand-600">Nguyên Chất</span><br />
              Nhà Làm
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bột sắn dây nhà làm từ củ sắn ta tươi — qua bàn tay khéo léo của gia đình 3 thế hệ. Không phụ gia, không tẩy trắng, ướp hoa bưởi tự nhiên.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/san-pham" className="btn-primary">
                Mua ngay <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/ve-chung-toi" className="btn-outline">
                Câu chuyện của chúng tôi
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-700">500+</div>
                <div className="text-xs text-gray-500 mt-0.5">Khách hàng</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-700">4.9★</div>
                <div className="text-xs text-gray-500 mt-0.5">Đánh giá TB</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-700">3+</div>
                <div className="text-xs text-gray-500 mt-0.5">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <Image
                src="/images/bot-san-day-nguyen-chat.png"
                alt="Bột sắn dây nguyên chất"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-500" />
                <div>
                  <div className="text-xs font-bold text-gray-800">Chứng nhận VSATTP</div>
                  <div className="text-xs text-gray-400">Cục An Toàn Thực Phẩm</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-brand-600 text-white rounded-2xl shadow-lg px-4 py-3 text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-xs">Nguyên chất</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-brand-50 hover:bg-brand-100 transition-colors">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
          <p className="section-subtitle">Chọn dung lượng phù hợp cho gia đình bạn</p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map(p => (
              <div key={p.id} className="card group">
                <div className="relative h-56 overflow-hidden">
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
                <div className="p-5 text-left">
                  <h3 className="font-bold text-gray-800 mb-2">{p.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({p.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-brand-600">{p.price}</span>
                      <span className="text-sm text-gray-400 line-through ml-2">{p.originalPrice}</span>
                    </div>
                    <Link href="/lien-he" className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
                      Đặt mua
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/san-pham" className="btn-outline">
              Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-4">🌿 Theo y học cổ truyền & nghiên cứu hiện đại</span>
            <h2 className="section-title">Tác Dụng Của Bột Sắn Dây</h2>
            <p className="section-subtitle">Được dùng hàng trăm năm trong y học dân gian, nay được khoa học chứng minh</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                emoji: '🌡️',
                title: 'Thanh nhiệt, giải khát',
                desc: 'Giúp hạ nhiệt cơ thể hiệu quả, chống say nắng, giảm đau đầu — đặc biệt hữu ích trong mùa hè.',
                tag: 'Công dụng nổi bật',
              },
              {
                emoji: '🫀',
                title: 'Tốt cho tim mạch',
                desc: 'Hoạt chất Puerarin giúp giãn mạch, hạ huyết áp và chống oxy hóa, bảo vệ tim mạch tự nhiên.',
                tag: 'Khoa học chứng minh',
              },
              {
                emoji: '🍃',
                title: 'Hỗ trợ tiêu hóa',
                desc: 'Trung hòa axit dạ dày, giảm triệu chứng viêm loét, hỗ trợ người bị đầy hơi, khó tiêu.',
                tag: 'Phù hợp hàng ngày',
              },
              {
                emoji: '✨',
                title: 'Làm đẹp da, trị nám',
                desc: 'Isoflavone ức chế melanin, giảm nám, tàn nhang. Cân bằng nội tiết tố, dưỡng ẩm da tự nhiên.',
                tag: 'Dành cho phụ nữ',
              },
              {
                emoji: '🍶',
                title: 'Giải độc gan & rượu',
                desc: 'Hạn chế hấp thu cồn, bảo vệ gan khỏi độc tố, hỗ trợ thải độc hiệu quả sau bữa tiệc.',
                tag: 'Tác dụng nhanh',
              },
              {
                emoji: '⚖️',
                title: 'Hỗ trợ giảm cân',
                desc: 'Không chứa chất béo, không cholesterol. Hoạt chất Genistein giúp giảm mỡ bụng, cải thiện vóc dáng.',
                tag: 'An toàn, lành mạnh',
              },
            ].map((item, i) => (
              <div key={i} className="card p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-full">{item.tag}</span>
                <h3 className="font-bold text-gray-800 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand-50 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600 italic">
              ⚠️ Lưu ý: Không dùng cho trẻ nhỏ dưới 1 tuổi, phụ nữ có thai bị động thai, hoặc người huyết áp thấp vào buổi sáng. Liều dùng khuyến cáo: 1 ly/ngày.
            </p>
          </div>
        </div>
      </section>

      {/* Story banner */}
      <section className="bg-brand-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge bg-brand-500 text-white mb-4">Câu chuyện của chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">3 Thế Hệ Gìn Giữ Nghề Truyền Thống</h2>
            <p className="text-brand-100 leading-relaxed mb-6">
              Từ đôi bàn tay của bà nội, gia đình chúng tôi đã gắn bó với nghề làm bột sắn dây hơn 30 năm. Mỗi mẻ bột đều được làm với tình yêu và sự tỉ mỉ như ngày đầu.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Không phụ gia', 'Không tẩy trắng', 'Chứng nhận VSATTP', 'Giao toàn quốc'].map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-brand-600 text-brand-100 text-sm px-3 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" /> {tag}
                </span>
              ))}
            </div>
            <Link href="/ve-chung-toi" className="bg-white text-brand-700 hover:bg-brand-50 font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
              Đọc thêm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/thu-hoach-san-day.png"
              alt="Thu hoạch sắn dây"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Khách Hàng Nói Gì?</h2>
          <p className="section-subtitle">Hơn 500 gia đình tin dùng Sắn Dây Quê</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6 text-left">
                <Quote className="w-8 h-8 text-brand-200 mb-3" />
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & payment */}
      <section className="bg-earth-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-bold text-gray-800">Giao hàng toàn quốc</h3>
              <p className="text-sm text-gray-500">Miễn phí vận chuyển đơn từ 300k. Giao trong 2-4 ngày.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-bold text-gray-800">Đảm bảo chất lượng</h3>
              <p className="text-sm text-gray-500">Hoàn tiền 100% nếu sản phẩm không đúng như mô tả.</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-bold text-gray-800">Thanh toán đa dạng</h3>
              <p className="text-sm text-gray-500">MoMo, ZaloPay, chuyển khoản ngân hàng, Apple Pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-800 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Đặt hàng ngay hôm nay</h2>
          <p className="text-brand-100 mb-8">Giao hàng nhanh, chất lượng đảm bảo. Dùng thử ngay để cảm nhận sự khác biệt!</p>
          <Link href="/lien-he" className="bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 text-lg transition-colors shadow-lg">
            Đặt hàng ngay <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
