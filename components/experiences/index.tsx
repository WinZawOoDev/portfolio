import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import ContentDesc, { contentDescProps } from './ContentDesc'
import ContentHeading from './ContentHeading'
import LayoutContainer from '../layouts/LayoutContainer'

const experiences: contentDescProps[] = [
  {
    position: "web developer",
    company: "CloudSourceMyanmar",
    website: "https://www.cloudsource.co.jp",
    date: {
      start: "02/2023",
      end: "present"
    },
    description: "Develop a tour management system, which can manage tour itinerary, bus car routes, service prices, customers, borkers, and buses.",
    techStack: ["Typescript", "React.js(Remix)", "CSS(Tailwind)", "ORM(Prisma)", "Database(PostgreSQL)", "Cloud(GCP)"]
  },
  {
    position: "web developer",
    company: "Advancer Business Solution",
    website: "http://pos.com.mm/",
    date: {
      start: "01/2020",
      end: "10/2022"
    },
    description: "Develop a goods order management system, which orders goods from grocery stores to its suppliers and integrates with SAP system.",
    techStack: ["PHP(Laravel)", "React.js", "CSS(Bootstrap)", "Database(Mysql)"]
  },
  {
    position: "web developer",
    company: "Advancer Business Solution",
    website: "http://pos.com.mm/",
    date: {
      start: "01/2020",
      end: "10/2022"
    },
    description: "Develop a membership card payment system API integration. which user can pay their charges with memeber card from point of sale system",
    techStack: ["PHP(Laravel)", "Database(Mysql)"]
  },
  {
    position: "web developer",
    company: "Advancer Business Solution",
    website: "http://pos.com.mm/",
    date: {
      start: "01/2020",
      end: "10/2022"
    },
    description: "Fix bugs and maintain the pos system, which improves performance, and speed of functionality, and add new features.",
    techStack: ["PHP(Codeigniter)", "CSS(Bootstrap)", "Database(MySQL)"]
  },
]

export default function Experiences() {
  return (
    <LinkContainer name='experiences'>
      <LayoutContainer>
        <div className='h-auto overflow-hidden'>
          <div className='relative h-fit md:px-12 py-9 lg:px:2 lg:pt-36 inset-y-0 inset-x-0'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-5'>
              <ContentHeading />
              <div>
                {experiences.map((exp, index) => (
                  <ContentDesc
                    key={`${index}${exp.date.start}`}
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
