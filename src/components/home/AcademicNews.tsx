import React from "react";

const NEWS = [
  {
    date: "06/2026",
    content: (
      <>🔍💻 Starting my journey as a Research Assistant at Department of Computing, PolyU!</>
    ),
    link: null,
  },
  {
    date: "04/2026",
    content: (
      <> 🎤 I presented our paper at ACM CHI 2026! It was a surreal moment to have researchers whose work I’ve cited come to my talk ~ </>
    ),
    link: 'https://www.linkedin.com/posts/xuehan-huang-197237334_chi2026-ugcPost-7452308104832028672-TzR-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFQKO0MB-dSr_lyuC4YAN6cTC2uvP333eRE',
  },
  {
    date: "03/2026",
    content: (
      <>🏆 I won the Best Paper Presentation Award at GBA Pre-CHI 2026! Thanks to all audiences for voting :D </>
    ),
    link: 'https://www.linkedin.com/posts/xuehan-huang-197237334_last-saturday-i-did-a-chi26-paper-presentation-activity-7441716550920941569-j8q5',
  },
  {
    date: "01/2026",
    content: (
      <>🎉 One of my first-author papers has been accepted to ACM CHI 2026! A huge thanks to my co-authors for their support!</>
    ),
    link: null,
  },
  {
    date: "06/2025",
    content: (
      <>🔍🤖 Starting my journey as a visiting student at Immersive Design Group, SUSTech. Can't wait!</>
    ),
    link: null,
  },
  {
    date: "04/2025",
    content: (
      <>🎉 My first CHI and first conference paper! So excited to meet amazing researchers and designers~</>
    ),
    link: null,
  },
  {
    date: "04/2025",
    content: (
      <>👾 Completed my first UI/UX design internship in Hong Kong Science and Technology Park! Many thanks for everyone I met here!</>
    ),
    link: null,
  }
];

export default function AcademicNews() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6 display-script">News</h2>
      <div className="flex flex-col gap-5">
        {NEWS.map((item, idx) => (
          <div key={item.date+idx} className="flex gap-6 items-baseline">
            <div className="text-sm md:text-base font-mono text-gray-500 w-20 shrink-0 text-right ">{item.date}</div>
            <div className="text-gray-900 text-[1rem] md:text-base leading-relaxed">
              <span>{item.content}</span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open academic news link"
                  className="inline-flex items-center ml-2 text-accent hover:text-accent-dark transition-colors font-semibold"
                >
                  <span aria-hidden className="text-sm leading-none">
                    [link]
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
