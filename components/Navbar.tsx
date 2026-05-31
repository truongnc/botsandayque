'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'

const links = [
  { href: '/', label: 'Trang chủ' },
  { href: '/san-pham', label: 'Sản phẩm' },
  { href: '/ve-chung-toi', label: 'Về chúng tôi' },
  { href: '/lien-he', label: 'Đặt hàng' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-brand-700 font-bold text-xl">
          <Leaf className="w-6 h-6 text-brand-500" />
          Sắn Dây Quê
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/lien-he" className="btn-primary text-sm py-2 px-5">
            Đặt ngay
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-brand-600 font-medium py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/lien-he" className="btn-primary text-sm text-center" onClick={() => setOpen(false)}>
            Đặt ngay
          </Link>
        </div>
      )}
    </header>
  )
}
