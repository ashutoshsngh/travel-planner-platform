import Link from 'next/link'

type Props = {}

const currentYear = new Date().getFullYear()

const footerLinks: { label: string; href: string }[] = [
  { label: 'About', href: '/about' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Travel Guides', href: '/guides' },
  { label: 'Support', href: '/support' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer(_: Props) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold text-blue-700 tracking-tight">Travel planner platform</span>
          <span className="text-sm text-gray-500 mt-1">&copy; {currentYear} Travel planner platform. All rights reserved.</span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-end">
          {footerLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}