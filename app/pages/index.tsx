import type { NextPage } from 'next'
import Head from 'next/head'
const posts = [
  { title: "React testing", excerpt: "Learn react testing" },
  { title: "React with tailwind", excerpt: "Learn react with tailwind" }  
  
]
const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Riki`s blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1>This is my blog, and here you will be reading about my daily thoughts. It might include topics like our existence, technology, sports...</h1>
        <div>
          {posts.map((post, index) => 
            <div>
              {post.title} <br/>
              {post.excerpt}
            </div>
          )}
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
