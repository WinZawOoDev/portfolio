import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import ContentDesc, { contentDescProps } from './ContentDesc'
import ContentHeading from './ContentHeading'
import LayoutContainer from '../layouts/LayoutContainer'

const experiences: contentDescProps[] = [
  {
    position: "web developer",
    company: "CloudSourceMyanmar",
    website: "",
    date: {
      start: "12/Dec/2020",
      end: "12/Dec/2020"
    },
    description: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    techStack: ["Typescript", "React.js(Remix)", "TailwindCss", "PrismaORM", "PostgreSql"]
  },
  {
    position: "web developer",
    company: "CloudSourceMyanmar",
    website: "",
    date: {
      start: "12/Dec/2020",
      end: "12/Dec/2020"
    },
    description: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    techStack: ["Typescript", "React.js(Remix)", "TailwindCss", "PrismaORM", "PostgreSql"]
  },
  {
    position: "web developer",
    company: "CloudSourceMyanmar",
    website: "",
    date: {
      start: "12/Dec/2020",
      end: "12/Dec/2020"
    },
    description: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    techStack: ["Typescript", "React.js(Remix)", "TailwindCss", "PrismaORM", "PostgreSql"]
  },
  {
    position: "web developer",
    company: "CloudSourceMyanmar",
    website: "",
    date: {
      start: "12/Dec/2020",
      end: "12/Dec/2020"
    },
    description: " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    techStack: ["Typescript", "React.js(Remix)", "TailwindCss", "PrismaORM", "PostgreSql"]
  }
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
