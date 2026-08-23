import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import ContentDesc, { contentDescProps } from './ContentDesc'
import ContentHeading from './ContentHeading'
import LayoutContainer from '../layouts/LayoutContainer'

const experiences: contentDescProps[] = [
  {
    position: "Senior Full-Stack Software Engineer",
    company: "KBZ Bank",
    website: "https://www.kbzbank.com",
    date: {
      start: "03/2025",
      end: "present"
    },
    description: "Working as Senior Full-Stack Software Engineer at KBZ Bank — building and maintaining banking systems and digital services.",
    techStack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    position: "Full-Stack Developer",
    company: "Smilax Global", 
    website: "https://smilaxglobal.com",
    date: {
      start: "12/2023",
      end: "02/2025"
    },
    description: "Built recruitment module for HR system — candidate pipelines and hiring workflows.",
    techStack: ["TypeScript", "Next.js", "ShadcnUI", "Nest.js", "Prisma", "gRPC", "PostgreSQL"],
  },
  {
    position: "Web Developer",
    company: "CloudSourceMyanmar",
    website: "https://www.cloudsource.co.jp",
    date: {
      start: "02/2023",
      end: "11/2023"
    },
    description: "Developed tour management system for itineraries, bus routes, service pricing, customers, brokers and fleet.",
    techStack: ["TypeScript", "Remix", "Tailwind", "Prisma", "PostgreSQL", "GCP"]
  },
  {
    position: "Web Developer",
    company: "Advancer Business Solution",
    website: "http://pos.com.mm/",
    date: {
      start: "01/2020",
      end: "10/2022"
    },
    description: "Built goods order management system with SAP integration, membership card payment API, and maintained POS system — ordering, payment and performance improvements for grocery retail.",
    techStack: ["PHP (Laravel)", "PHP (CodeIgniter)", "React.js", "Bootstrap", "MySQL", "REST API"]
  },
]

export default function Experiences() {
  return (
    <LinkContainer name='experiences'>
      <LayoutContainer>
        <div className='section overflow-hidden'>
          <div className='relative h-fit md:px-6 lg:px-8 inset-y-0 inset-x-0'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-start'>
              <ContentHeading />
              <div>
                {experiences.map((exp, index) => (
                  <ContentDesc
                    key={`${exp.company}-${exp.position}-${index}`}
                    position={exp.position}
                    company={exp.company}
                    website={exp.website}
                    date={exp.date}
                    description={exp.description}
                    techStack={exp.techStack}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </LinkContainer>
  )
}
