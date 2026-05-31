import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { Calendar, Clock, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Sức Khỏe | Sắn Dây Quê',
  description: 'Chia sẻ kiến thức về bột sắn dây, công thức nấu ăn, và bí quyết sức khỏe từ thiên nhiên.',
  keywords: 'blog sắn dây, công dụng bột sắn dây, công thức sắn dây, sức khỏe tự nhiên',
  openGraph: {
    title: 'Blog Sức Khỏe | Sắn Dây Quê',
    description: 'Kiến thức về bột sắn dây và sức khỏe tự nhiên',
    url: 'https://sandayque.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="badge mb-4">📖 Blog</span>
          <h1 className="section-title">Kiến Thức Sức Khỏe</h1>
          <p className="text-gray-500 text-lg">Chia sẻ về bột sắn dây, công thức và bí quyết sống khỏe</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg">Chưa có bài viết nào. Hãy quay lại sau!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">{post.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('vi-VN')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
