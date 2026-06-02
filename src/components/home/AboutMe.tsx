import { EDUCATION, SKILLS, INTERESTS } from '../../data/home-data'

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-8 display-script">
        About Me
      </h2>
      <div className="card fade-in-up">
        <div className="prose max-w-none">
        <div className="prose max-w-none px-6 md:px-8"> {/* 添加水平padding */}
          <p>👋 Hello! I’m <strong>Shayna</strong>. I explore the intersection of <span className="text-accent font-semibold">human</span> and <span className="text-accent font-semibold">technology</span>, designing experiences that feel natural and delightful.</p>
          <p>🧠 Interests: <strong>HCI</strong>, product design, prototyping, and playful interfaces. ✨</p>
          <p>📚 Currently at <strong>HKU</strong> (IDT), focusing on calm tech and assistive interactions.</p>
          <p>💌 Open to collabs: let’s build something <strong>useful</strong> and <span className="text-accent font-semibold">beautiful</span>.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
