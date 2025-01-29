import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", excerpt: "Learn Next.js basics", date: "2023-06-01", readTime: "5 min read", author: "Kushal Kumar J", content: "**Next.js** is a React framework...", image: "/nextjs.png" },
  { id: 2, title: "The Power of Tailwind CSS", excerpt: "Discover Tailwind CSS", date: "2023-06-05", readTime: "4 min read", author: "Kushal Kumar J", content: "Tailwind CSS is a utility-first framework...", image: "/tailwind.png" }
]

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const router = useRouter()

  return (
    <div className={isDarkTheme ? 'dark' : ''}>
      <Head>
        <title>My Awesome Blog</title>
        <meta name="description" content="A blog about modern web development." />
      </Head>

      <header className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">My Awesome Blog</h1>
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <main className="p-4">
        <h2 className="text-2xl mb-4">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blogPosts.map(post => (
            <div key={post.id} className="border p-4 rounded shadow cursor-pointer" onClick={() => router.push(`/post/${post.id}`)}>
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm">{post.date} · {post.readTime} · {post.author}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4 text-center bg-gray-200">
        <p>&copy; 2023 My Awesome Blog</p>
      </footer>
    </div>
  )
}