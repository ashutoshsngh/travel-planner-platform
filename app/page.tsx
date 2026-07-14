import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel planner platform',
  description: 'Travel planner platform',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#f8fbfe] to-[#f4f8fc]">
      <section className="text-center px-6 py-16 rounded-lg bg-white shadow-md max-w-xl">
        <h1 className="text-4xl font-extrabold text-[#005EB8] mb-4">
          Travel planner platform
        </h1>
        <p className="text-lg text-[#5f7488]">
          Plan your next adventure with our all-in-one travel planner platform. Discover destinations, organize trips, and make travel effortless.
        </p>
      </section>
    </main>
  )
}