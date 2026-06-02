import Layout from '../components/common/Layout'
import Image from 'next/image'
import Publication from '../components/work/Publication'
import DesignProjects from '../components/work/DesignProjects'
import { PUBLICATION_MOCK, PROJECTS_MOCK } from '../data/home-data'

export default function Work() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold text-accent mb-12 display-script">
          <Image src="/images/work.png" alt="Work Logo" width={60} height={60} />
          Work
        </h1>
        <Publication publications={PUBLICATION_MOCK} />
        <DesignProjects projects={PROJECTS_MOCK} />
      </div>
    </Layout>
  )
}
