import Link from 'next/link'
import { SOCIAL_LINKS } from '../../data/site-config'
import Image from 'next/image'

interface BlogPost {
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
  readTime: string
}

interface WritingProps {
  posts: BlogPost[]
}

export default function Writing({ posts }: WritingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 display-script">Writings</h2>
      <p className="text-gray-800 leading-relaxed">
        This is a writer scattering words across the internet when inspiration strikes. Hoping to gather them into a proper collection one day. 
      </p>
      <p className="text-gray-800 leading-relaxed">
        Until then, feel free to drop me a 'hello' in the chaos ^ ^.
      </p>

      <div className="flex items-center gap-6">
        {/* Instagram */}
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
          title="Instagram"
        >
          <Image src="/images/instagram.svg" alt="Instagram" width={28} height={28} />
        </a>

        {/* 小红书 */}
        <a
          href={SOCIAL_LINKS.xhs}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
          title="Xiaohongshu"
        >
          <Image src="/images/Rednote.svg" alt="Xiaohongshu" width={28} height={28} />
        </a>
      </div>
    </div>
  )
}