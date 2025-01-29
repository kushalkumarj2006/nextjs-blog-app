import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", excerpt: "Learn Next.js basics", date: "2023-06-01", readTime: "5 min read", author: "Kushal Kumar J", content: "**Next.js** is a React framework...", image: "/nextjs.png" },
  { id: 2, title: "The Power of Tailwind CSS", excerpt: "Discover Tailwind CSS", date: "2023-06-05", readTime: "4 min read", author: "Kushal Kumar J", content: "Tailwind CSS is a utility-first framework...", image: "/tailwind.png" }
]

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query
  const post = blogPosts.find(p => p.id === Number(id))

  if (!post) return <p>Post not found</p>

  return (
    <div className="p-4">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <button onClick={() => router.push('/')} className="mb-4 flex items-center">
        <ArrowLeft className="mr-2" /> Back to all posts
      </button>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm">{post.date} · {post.readTime} · {post.author}</p>
      <img src={post.image} alt={post.title} className="w-full h-auto my-4" />
      <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
    </div>
  )
}