'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type NavLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Trips', href: '/trips' },
  { label: 'Guides', href: '/guides' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
]

export interface HeaderProps {}

export default function Header(_props: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Travel planner platform logo"
            width={36}
            height={36}
            priority
            className="rounded-md"
          />
          <span className="font-extrabold text-lg md:text-xl text-primary tracking-tight">
            Travel Planner
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open navigation menu"
          className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">Open navigation menu</span>
          <svg
            className="w-6 h-6 text-slate-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute top-full left-0 w-full z-40 animate-fade-in">
          <ul className="flex flex-col gap-2 py-4 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-base font-medium text-slate-700 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}