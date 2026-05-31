import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sắn Dây Quê | Bột Sắn Dây Nguyên Chất',
  description: 'Bột sắn dây nguyên chất từ gia đình — sản xuất thủ công, có chứng nhận VSATTP, tốt cho sức khỏe. Giao hàng toàn quốc.',
  keywords: 'bột sắn dây, sắn dây nguyên chất, thực phẩm healthy, bột sắn dây quê, mua bột sắn dây',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Sắn Dây Quê | Bột Sắn Dây Nguyên Chất',
    description: 'Bột sắn dây nguyên chất từ gia đình — sản xuất thủ công, có chứng nhận VSATTP',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
