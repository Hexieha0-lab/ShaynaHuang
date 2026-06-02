import Image from 'next/image'

export type PublicationCategory = 'journal' | 'conference'

export interface Publication {
  title: string
  year: string
  authors: string
  journal: string
  description: string
  image?: string
  category: PublicationCategory
  linkProceedings?: string
  linkPdf?: string
  linkarXiv?: string
  linkWebsite?: string
  linkDoi?: string
}

interface PublicationProps {
  publications: Publication[]
}

const HIGHLIGHT_NAME = 'Huang, X.'

function renderAuthors(authors: string) {
  const parts = authors.split(HIGHLIGHT_NAME)

  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && (
            <span className="font-semibold">{HIGHLIGHT_NAME}</span>
          )}
        </span>
      ))}
    </>
  )
}

const CATEGORY_LABELS: Record<PublicationCategory, string> = {
  journal: 'Journal Paper',
  conference: 'Full Conference Paper',
}

export default function Publication({ publications }: PublicationProps) {
  const byCategory = publications.reduce<Record<PublicationCategory, Publication[]>>(
    (acc, pub) => {
      const cat = pub.category
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(pub)
      return acc
    },
    {} as Record<PublicationCategory, Publication[]>
  )
  const sections: PublicationCategory[] = ['conference', 'journal']

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent mb-8">Publications</h2>
      {sections.map((category) => {
        const list = byCategory[category] ?? []
        if (list.length === 0) return null
        return (
          <div key={category} className="mb-10">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="space-y-6">
              {list.map((pub, index) => (
                <div key={`${category}-${index}`} className="bg-white rounded-xl shadow-soft p-6 md:p-8 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center ring-1 ring-accent/10">
                      {pub.image ? (
                        <Image src={pub.image} alt={pub.title} width={140} height={140} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 break-words">
                        {pub.title}
                      </h3>
                      <div className="text-sm text-gray-700 leading-snug">{pub.journal}</div>
                      <div className="text-sm text-gray-500 leading-snug">
                        {renderAuthors(pub.authors)}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {pub.linkProceedings && (
                          <a
                            href={pub.linkProceedings}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-background hover:text-accent-dark transition-colors [&_svg]:shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8"/><path d="M8 11h8"/></svg>
                            Proceedings
                          </a>
                        )}
                        {pub.linkWebsite && (
                          <a
                            href={pub.linkWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-background hover:text-accent-dark transition-colors [&_svg]:shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M2 12h20"></path>
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"></path>
                            </svg>
                            Website
                          </a>
                        )}
                        {pub.linkarXiv && (
                          <a
                            href={pub.linkarXiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-background hover:text-accent-dark transition-colors [&_.arxiv-icon]:shrink-0"
                          >
                            <span
                              className="arxiv-icon inline-block w-4 h-4 bg-[currentColor]"
                              style={{
                                mask: 'url(/images/Arxiv.svg) no-repeat center / contain',
                                WebkitMask: 'url(/images/Arxiv.svg) no-repeat center / contain',
                              }}
                              aria-hidden
                            />
                            arXiv
                          </a>
                        )}
                        {pub.linkDoi && (
                          <a
                            href={pub.linkDoi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-background hover:text-accent-dark transition-colors [&_svg]:shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                            DOI
                          </a>
                        )}
                        {pub.linkPdf && (
                          <a
                            href={pub.linkPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-background hover:text-accent-dark transition-colors [&_svg]:shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                            PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
