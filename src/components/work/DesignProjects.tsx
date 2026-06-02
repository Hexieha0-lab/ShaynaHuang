import Image from 'next/image'

interface Project {
  title: string
  summary: string
  image: string
  link: string // 链接到 PDF
  technologies?: string[]
  year?: string
}

interface DesignProjectsProps {
  projects: Project[]
}

export default function DesignProjects({ projects }: DesignProjectsProps) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-accent mb-8">Design Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {projects.slice(0, 6).map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl overflow-hidden aspect-square bg-gray-200 shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start overflow-auto">
                <div className="p-4 text-white w-full">
                  <div className="text-sm md:text-base font-semibold mb-2 break-words">{project.title}</div>
                  <div className="text-xs md:text-sm text-gray-200 whitespace-pre-wrap break-words">{project.summary}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
