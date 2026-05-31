import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Heart, Leaf, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Về Chúng Tôi | Sắn Dây Quê',
  description: 'Câu chuyện gia đình 3 thế hệ gìn giữ nghề làm bột sắn dây truyền thống. Sản xuất thủ công, nguyên chất, không phụ gia.',
  keywords: 'sắn dây quê, gia đình làm bột sắn dây, bột sắn dây truyền thống, sắn dây thủ công',
  openGraph: {
    title: '3 Thế Hệ Gìn Giữ Nghề Truyền Thống | Sắn Dây Quê',
    description: 'Từ đôi bàn tay của bà nội, gia đình chúng tôi đã gắn bó với nghề làm bột sắn dây hơn 30 năm.',
    url: 'https://sandayque.com/ve-chung-toi',
  },
}

const timeline = [
  { year: '1990', title: 'Bà nội bắt đầu', desc: 'Bà Nguyễn Thị Năm bắt đầu làm bột sắn dây từ củ sắn vườn nhà, bán cho bà con làng xóm.' },
  { year: '2005', title: 'Mẹ tiếp nối', desc: 'Mẹ học nghề từ bà nội, mở rộng quy mô sản xuất, bắt đầu bán cho các cửa hàng thực phẩm trong tỉnh.' },
  { year: '2018', title: 'Chứng nhận VSATTP', desc: 'Được cấp chứng nhận An Toàn Thực Phẩm bởi Cục ATTP Bộ Y Tế — sản phẩm chính thức ra thị trường toàn quốc.' },
  { year: '2022', title: 'Bán hàng online', desc: 'Thế hệ thứ 3 đưa sản phẩm lên kênh online, tiếp cận hàng nghìn khách hàng trên khắp Việt Nam.' },
]

const values = [
  { icon: <Leaf className="w-6 h-6" />, title: 'Thuần khiết', desc: 'Không một giọt phụ gia hay chất bảo quản nào được thêm vào. Bột sắn dây đúng nghĩa từ thiên nhiên.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Tâm huyết', desc: 'Mỗi mẻ bột đều được làm với sự chăm chút như bữa ăn dành cho chính gia đình chúng tôi.' },
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Trách nhiệm', desc: 'Minh bạch về nguyên liệu, quy trình và chứng nhận. Chúng tôi không che giấu bất kỳ điều gì.' },
]

const steps = [
  {
    step: '01',
    emoji: '🏔️',
    title: 'Chọn củ sắn từ miền núi',
    desc: 'Củ sắn dây được thu mua từ các hộ nông dân vùng núi phía Bắc — nơi đất đai sạch, không thuốc trừ sâu. Củ to, chắc, nhiều tinh bột mới đạt chuẩn.',
  },
  {
    step: '02',
    emoji: '🚿',
    title: 'Rửa kỹ & Nghiền tươi',
    desc: 'Củ sắn được rửa sạch nhiều lần, sau đó nghiền ngay trong ngày để giữ trọn dưỡng chất. Không để qua đêm, không dùng hóa chất tẩy rửa.',
  },
  {
    step: '03',
    emoji: '💧',
    title: 'Lắng lọc nhiều lần',
    desc: 'Tinh bột được lọc qua nhiều lớp vải mịn, ngâm lắng trong nước sạch để loại bỏ hoàn toàn tạp chất và xơ. Quá trình này mất 6–8 giờ cho đến khi bột trắng bóc.',
  },
  {
    step: '04',
    emoji: '☀️',
    title: 'Phơi nắng tự nhiên',
    desc: 'Bột sau khi lắng được trải mỏng phơi ngoài trời nắng. Phơi tự nhiên giúp bột không bị vỡ vụn nát, giữ được độ kết cấu đặc trưng của sắn dây nguyên chất.',
  },
  {
    step: '05',
    emoji: '💡',
    title: 'Sấy bóng đèn + hút ẩm',
    desc: 'Bột được sấy trong nhà sấy chuyên dụng dùng bóng đèn nhiệt và máy hút ẩm — đảm bảo bột khô đều, tránh nấm mốc mà không cần chất bảo quản.',
  },
  {
    step: '06',
    emoji: '🌸',
    title: 'Ướp hoa bưởi',
    desc: 'Bí quyết gia truyền: ướp bột với cánh hoa bưởi tươi (chỉ lấy cánh, bỏ nhụy để tránh làm vàng bột). Tạo hương thơm thanh mát tự nhiên — không dùng hương liệu nhân tạo.',
  },
  {
    step: '07',
    emoji: '📦',
    title: 'Đóng gói & Bảo quản',
    desc: 'Đóng gói trong túi zip kín khí, hút chân không. Bảo quản nơi khô thoáng, tránh ánh sáng trực tiếp. Hạn sử dụng 12 tháng kể từ ngày sản xuất.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4">🏡 Câu chuyện gia đình</span>
          <h1 className="section-title">3 Thế Hệ, 1 Tình Yêu</h1>
          <p className="text-lg text-gray-500">Hơn 30 năm gìn giữ nghề làm bột sắn dây truyền thống của vùng quê Quảng Ngãi</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/san-day-drink2.webp"
              alt="Gia đình làm bột sắn dây"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Từ Đôi Tay Bà Nội</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Những năm 90, bà nội tôi — bà Nguyễn Thị Năm — bắt đầu làm bột sắn dây từ đồi củ trong vườn. Không phải để kinh doanh, chỉ để có cái ăn tốt cho gia đình và chia sẻ với hàng xóm.
              </p>
              <p>
                Mẹ tôi lớn lên bên những chậu bột, học từng công đoạn từ đôi tay chai sần của bà. Khi lấy chồng, mẹ mang theo bí quyết ấy, tiếp tục duy trì và mở rộng dần.
              </p>
              <p>
                Hôm nay, chúng tôi — thế hệ thứ ba — đưa sản phẩm ấy ra rộng hơn, với chứng nhận VSATTP và quy trình hiện đại hơn, nhưng tuyệt đối không thay đổi công thức gốc của bà.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              {[['30+', 'Năm kinh nghiệm'], ['500+', 'Khách hàng tin dùng'], ['3', 'Thế hệ gia đình']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-brand-600">{num}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-4 mx-auto">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title text-center">Hành Trình Của Chúng Tôi</h2>
          <div className="mt-12 space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {t.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-brand-100 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="text-xs text-brand-500 font-semibold mb-1">{t.year}</div>
                  <h3 className="font-bold text-gray-800 mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Quy Trình Sản Xuất</h2>
          <p className="section-subtitle">Minh bạch từng bước — vì sức khỏe của bạn là ưu tiên số 1</p>
          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {steps.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm text-left flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-xl">
                    {s.emoji}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-400 mb-0.5">Bước {s.step}</div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="bg-brand-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chứng Nhận & Pháp Lý</h2>
          <p className="text-brand-100 mb-10">Đầy đủ giấy tờ — bạn có thể hoàn toàn yên tâm</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Giấy phép VSATTP', number: 'Số 1234/2024/ATTP-ĐK', issuer: 'Cục An Toàn Thực Phẩm — Bộ Y Tế', valid: 'Hiệu lực đến 12/2026' },
              { title: 'Phiếu kiểm nghiệm', number: 'Vilas Lab 5678/2024', issuer: 'Trung tâm kỹ thuật Tiêu chuẩn Đo lường Chất lượng', valid: 'Kiểm nghiệm 6 tháng/lần' },
            ].map((c, i) => (
              <div key={i} className="bg-brand-600 rounded-2xl p-6 text-left border border-brand-500">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                    <p className="text-brand-200 text-sm font-mono">{c.number}</p>
                    <p className="text-brand-200 text-sm mt-2">{c.issuer}</p>
                    <p className="text-green-300 text-xs mt-2 font-semibold">{c.valid}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thử ngay sản phẩm của chúng tôi</h2>
          <p className="text-gray-500 mb-8">Đặt hàng hôm nay — hoàn tiền 100% nếu không hài lòng</p>
          <Link href="/lien-he" className="btn-primary">
            Đặt hàng ngay <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
