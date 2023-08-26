import React from 'react'
import Container from './Container'
import ContentDesc, { contentDescProps } from './ContentDesc'
import ContentHeading from './ContentHeading'

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
    <Container>
      <div className='relative max-w-7xl h-fit pt-36 m-auto inset-y-0 inset-x-0'>
        <div className='grid grid-cols-2 gap-5'>
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
    </Container>
  )
}
