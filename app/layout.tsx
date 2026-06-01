import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

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
      <head>
        {/* Google Analytics 4 */}
        {GA_ID && <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}} />
        </>}
        {/* Facebook Pixel */}
        {FB_PIXEL_ID && <Script id="fb-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
          document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}} />}
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
