'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">😕</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Có lỗi xảy ra</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Trang này gặp sự cố không mong muốn. Thử tải lại hoặc quay về trang chủ nhé.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={reset} className="btn-primary">
            <RefreshCw className="w-4 h-4" /> Thử lại
          </button>
          <Link href="/" className="btn-outline">
            <Home className="w-4 h-4" /> Trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}
