interface UpdateItem {
  title: string
  date: string
  link?: string
}

const MOCK_UPDATES: UpdateItem[] = [
  { title: 'Launched my new portfolio website', date: '2025-10-01' },
  { title: 'Published an article on design systems', date: '2025-09-12' },
  { title: 'Started a new research project', date: '2025-08-30' },
]

export default function LatestUpdates() {
  return (
    <div className="fade-in-up max-w-6xl mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-accent mb-6 display-script">Latest Updates</h3>
      <div className="card p-0 overflow-hidden">
        {MOCK_UPDATES.map((item, idx) => (
          <a
            key={idx}
            href={item.link ?? '#'}
            className={`block px-5 md:px-6 py-4 transition-colors hover:bg-accent/5 ${idx !== 0 ? 'border-t border-accent/20' : ''}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 w-28 shrink-0">{new Date(item.date).toLocaleDateString()}</span>
              <span className="text-gray-800">{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}


