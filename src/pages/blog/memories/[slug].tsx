import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../components/common/Layout'

const MEMORY_IMAGES: Record<string, { title: string; images: string[] }> = {
  'yunnan': { title: 'FriendTRIP in Yunnan', images: [
    '/images/memories/yunnan/1.jpg',
    '/images/memories/yunnan/2.jpg',
    '/images/memories/yunnan/3.jpg',
    '/images/memories/yunnan/4.jpg',
    '/images/memories/yunnan/5.jpg',
    '/images/memories/yunnan/6.jpg',
    '/images/memories/yunnan/7.jpg',
    '/images/memories/yunnan/8.jpg',
    '/images/memories/yunnan/9.jpg',
    '/images/memories/yunnan/10.jpg',
    '/images/memories/yunnan/11.jpg',
  ],
},
  'nanao': { title: 'Seaside of Shenzhen', images: [
    '/images/memories/nanao/1.jpg',
    '/images/memories/nanao/2.jpg',
    '/images/memories/nanao/3.jpg',
    '/images/memories/nanao/4.jpg',
    '/images/memories/nanao/5.jpg',
  ] },
  'idgers': { title: 'Visiting as IDGer!', images: [
    '/images/memories/idgers/1.jpg',
    '/images/memories/idgers/2.jpg',
    '/images/memories/idgers/3.jpg',
    '/images/memories/idgers/4.png',
    '/images/memories/idgers/5.jpg',
    '/images/memories/idgers/6.jpg',
    '/images/memories/idgers/7.jpg',
  ] },
  'chi': { title: 'CHI 2025 in Yokohama', images: [
    '/images/memories/chi/1.jpg',
    '/images/memories/chi/2.jpg',
    '/images/memories/chi/3.jpg',
    '/images/memories/chi/4.jpg',
    '/images/memories/chi/5.jpg',
    '/images/memories/chi/6.jpg',
    '/images/memories/chi/7.jpg',
    '/images/memories/chi/8.jpg',
  ] },
  'tokyo': { title: 'A Taste of Tokyo', images: [
    '/images/memories/tokyo/1.jpg',
    '/images/memories/tokyo/2.jpg',
    '/images/memories/tokyo/3.jpg',
    '/images/memories/tokyo/4.jpg',
    '/images/memories/tokyo/5.jpg',
    '/images/memories/tokyo/6.jpg',
    '/images/memories/tokyo/7.jpg',
  ] },
  'sharp island': { title: 'Sharp Island', images: [
    '/images/memories/sharp island/1.jpg',
    '/images/memories/sharp island/2.jpg',
    '/images/memories/sharp island/3.jpg',
    '/images/memories/sharp island/4.jpg',
    '/images/memories/sharp island/5.jpg',
    '/images/memories/sharp island/6.jpg',
  ] },
  'central': { title: 'A Walk in Rainy Central', images: [
    '/images/memories/central/1.jpg',
    '/images/memories/central/2.jpg',
    '/images/memories/central/3.jpg',
    '/images/memories/central/4.jpg',
    '/images/memories/central/5.jpg',
    '/images/memories/central/6.jpg',
    '/images/memories/central/7.jpg',
    '/images/memories/central/8.jpg',
    '/images/memories/central/9.jpg',
  ] },
  'nanjing': { title: 'Collection of Nanjing', images: [
    '/images/memories/nanjing/1.jpg',
    '/images/memories/nanjing/2.jpg',
    '/images/memories/nanjing/3.jpg',
    '/images/memories/nanjing/4.jpg',
    '/images/memories/nanjing/5.jpg',
    '/images/memories/nanjing/6.jpg',
    '/images/memories/nanjing/7.jpg',
    '/images/memories/nanjing/8.jpg',
    '/images/memories/nanjing/9.jpg',
    '/images/memories/nanjing/10.jpg',
    '/images/memories/nanjing/11.jpg',
    '/images/memories/nanjing/12.jpg',
    '/images/memories/nanjing/13.jpg',
    '/images/memories/nanjing/14.jpg',
    '/images/memories/nanjing/15.jpg',
  ] },
}

type MemoryDetailProps = {
  data: { title: string; images: string[] }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(MEMORY_IMAGES)
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<MemoryDetailProps> = async ({ params }) => {
  const slug = params?.slug as string
  const data = MEMORY_IMAGES[slug]

  if (!data) {
    return { notFound: true }
  }

  return {
    props: { data },
  }
}

export default function MemoryDetail({ data }: MemoryDetailProps) {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="mb-6 flex items-center gap-3">
          <Link href="/blog" className="text-gray-600 hover:text-accent transition-colors" title="Back">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-accent display-script">{data.title}</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.images.map((src, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden bg-white shadow-soft aspect-square">
              <img src={src} alt={`memory-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
