import Layout from '../../components/common/Layout'
import Image from 'next/image'
import Writing from '../../components/blog/Writing'
import Album from '../../components/blog/Album'
import { BLOG_POSTS_MOCK } from '../../data/blog-posts'

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-center text-accent mb-12 display-script">
          <Image src="/images/blog.png" alt="Blog Logo" width={60} height={60} />
          Blog
        </h1>
        <Writing posts={BLOG_POSTS_MOCK} />
        <Album />
      </div>
    </Layout>
  )
}
