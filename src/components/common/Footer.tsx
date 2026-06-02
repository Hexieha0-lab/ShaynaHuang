export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white/70 backdrop-blur border-t">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          © {currentYear} <span className="text-accent">Xuehan Huang</span>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
