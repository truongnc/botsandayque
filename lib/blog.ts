import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
  readingTime: string
  content: string
}

export function getAllPosts(): Omit<Post, 'content'>[] {
  if (!fs.existsSync(POSTS_DIR)) return []

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.(mdx|md)$/, '')
      const filePath = path.join(POSTS_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        category: data.category || 'Sức khỏe',
        tags: data.tags || [],
        image: data.image || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        readingTime: `${Math.ceil(rt.minutes)} phút đọc`,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const extensions = ['mdx', 'md']
  let filePath = ''

  for (const ext of extensions) {
    const candidate = path.join(POSTS_DIR, `${slug}.${ext}`)
    if (fs.existsSync(candidate)) {
      filePath = candidate
      break
    }
  }

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    category: data.category || 'Sức khỏe',
    tags: data.tags || [],
    image: data.image || 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
    readingTime: `${Math.ceil(rt.minutes)} phút đọc`,
    content,
  }
}
