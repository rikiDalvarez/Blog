import { PostCard } from "../components/PostCard"
import { Categories} from "../components/Categories"
import { PostWidget} from "../components/PostWidget"
import type { NextPage } from 'next'
import Head from 'next/head'
const posts = [
  { title: "React testing", excerpt: "Learn react testing" },
  { title: "React with tailwind", excerpt: "Learn react with tailwind" }  
  
]
const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-green-200">
      <Head>
        <title>Riki`s blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <h1>This is my blog, and here you will be reading about my daily thoughts. It might include topics like our existence, technology, sports...</h1>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-yellow-100">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => 
            <PostCard post={post} key={post.title}></PostCard>
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
           

          </div>

        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  )
}

export default Home
