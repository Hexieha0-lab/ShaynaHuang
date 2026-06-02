import Layout from '../components/common/Layout'
import Snowfall from '../components/home/Snowfall'
import AcademicHeader from '../components/home/AcademicHeader'
import AboutMeAcademic from '../components/home/AboutMeAcademic'
import ThoughtsHCI from '../components/home/ThoughtsHCI'
import AcademicNews from '../components/home/AcademicNews'

export default function Home() {
  return (
    <Layout>
      <Snowfall />
      <section className="max-w-3xl mx-auto px-4 pb-10 pt-12 md:pt-20">
        <AcademicHeader />
      </section>
      <hr className="my-8 max-w-3xl mx-auto border-t border-accent/20" />
      <section className="max-w-3xl mx-auto px-4 py-8 md:py-14 fade-in-up">
        <AboutMeAcademic />
      </section>
      <hr className="my-8 max-w-3xl mx-auto border-t border-accent/20" />
      <section className="max-w-3xl mx-auto px-4 py-8 md:py-14 fade-in-up">
        <ThoughtsHCI />
      </section>
      <hr className="my-8 max-w-3xl mx-auto border-t border-accent/20" />
      <section className="max-w-3xl mx-auto px-4 py-8 md:py-14 fade-in-up">
        <AcademicNews />
      </section>
    </Layout>
  )
}
