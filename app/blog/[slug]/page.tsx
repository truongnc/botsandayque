import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sắn Dây Quê`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sandayque.com/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-96 w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-3xl mx-auto">
          <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
            {post.category}
          </span>
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <Link href="/blog" className="flex items-center gap-1 text-brand-600 hover:text-brand-700 font-medium">
            <ArrowLeft className="w-4 h-4" /> Tất cả bài viết
          </Link>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </span>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-green max-w-none
          prose-headings:font-bold prose-headings:text-gray-800
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-800
          prose-ul:text-gray-600 prose-ol:text-gray-600
          prose-blockquote:border-brand-400 prose-blockquote:bg-brand-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
          prose-img:rounded-2xl prose-img:shadow-md">
          <MDXRemote source={post.content} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Bạn muốn thử bột sắn dây nguyên chất?</h3>
          <p className="text-brand-100 mb-6 text-sm">Sản xuất thủ công, không phụ gia, giao toàn quốc</p>
          <Link href="/lien-he" className="inline-block bg-white text-brand-700 font-semibold px-6 py-3 rounded-xl hover:bg-brand-50 transition-colors">
            Đặt hàng ngay →
          </Link>
        </div>
      </div>
    </>
  )
}
