import Image from 'next/image'
import { SOCIAL_LINKS } from '../../data/site-config'

export default function BasicInfo() {
  return (
    <div className="w-full px-4 py-12 max-w-6xl mx-auto">
      <div className="w-full relative overflow-hidden bg-white/60 backdrop-blur shadow-soft p-6 md:p-10 flex flex-col items-center gap-6 fade-in-up">
        <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="flex-shrink-0">
          <Image
            src="/images/hxh.png"
            alt="Profile Photo"
            width={200}
            height={200}
            className="rounded-full shadow-[0_12px_32px_rgba(108,99,255,0.30)] transition-transform duration-300 hover:-translate-y-0.5"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-6 display-script">
            Xuehan (Shayna) Huang
          </h1>
          <div className="mt-2 flex justify-center gap-8">
            <a
              href={SOCIAL_LINKS.email}
              className="text-gray-600 hover:text-accent transition-colors transform hover:-translate-y-0.5 duration-300 cursor-glow"
              title="Email"
            >
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.x}
              className="text-gray-600 hover:text-accent transition-colors transform hover:-translate-y-0.5 duration-300 cursor-glow"
              title="X (Twitter)"
            >
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="text-gray-600 hover:text-accent transition-colors transform hover:-translate-y-0.5 duration-300 cursor-glow"
              title="LinkedIn"
            >
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
