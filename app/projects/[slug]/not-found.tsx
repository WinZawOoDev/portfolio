import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-32 pb-16 layout-container text-center">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Project not found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">The project you are looking for does not exist.</p>
      <Link href="/#projects" className="mt-6 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover">
        Back to projects
      </Link>
    </div>
  )
}
