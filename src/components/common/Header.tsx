import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data/site-config'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 transition-[box-shadow,background-color] duration-300 ${scrolled ? 'shadow-soft' : 'shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <Link href="/" className="group inline-flex items-center">
  <span className="inline-block p-2 rounded-full bg-white shadow-soft transition-transform duration-500 group-hover:rotate-12">
    {/* ✨ 替换后的 Snowman.svg Logo */}
    <img
      src="/images/Snowman.svg" 
      alt="Snowman Logo" 
      width="28" 
      height="28"
      className="text-accent" /* 注意：此处的 className 对 SVG 文件的内部颜色可能无效 */
    />
  </span>
  <span className="ml-3 text-lg font-semibold text-accent display-script">Welcome</span>
</Link>
          </div>
          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 hover:text-accent px-3 py-2 text-base display-script transition-colors"
              >
                <span className="after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"/>
                {link.name}
              </Link>
            ))}
          </div>

          {/* 移动端汉堡按钮 */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-accent hover:bg-white/60 transition-colors"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className={`w-6 h-6 transition-transform ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* 移动端抽屉菜单 */}
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base display-script text-gray-700 hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
