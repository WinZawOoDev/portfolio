import About from '@/components/about/index'
import Experiences from '@/components/experiences'
import Projects from '@/components/projects'
import Contact from '@/components/contact'

// Homepage is a static route `app/page.tsx:1` — `generateStaticParams` is NOT needed here.
// Only dynamic routes like `app/projects/[slug]/page.tsx:10` use `generateStaticParams` to pre-render 11 slugs.
export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </>
  )
}
