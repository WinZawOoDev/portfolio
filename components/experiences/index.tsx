import React from 'react'
import {Libre_Franklin} from 'next/font/google'
import Container from './Container'
import ContentDesc, { contentDescProps } from './ContentDesc'

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


const libreFranklinFont = Libre_Franklin({subsets:["latin"], weight:"800"})

export default function Experiences() {
  return (
    <Container>
      {/* Experiences Descriptions */}
      <div className='relative max-w-7xl h-fit pt-36 m-auto inset-y-0 inset-x-0'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='relative place-items-end'>
            <div className='absolute inset-x-0 top-1/4 m-auto h-fit w-fit'>
              <h1 className={`${libreFranklinFont.className} text-4xl font-bold text-gray-700`}>My Working Experiences.</h1>
              <span className='block text-lg text-gray-600'>as a developer.</span>
              <button className='outline-none rounded-md ring-4 ring-gray-600 bg-[#253529] px-5 py-2 transform transition-all delay-150 duration-150 hover:scale-110 my-7 font-semibold text-white'>
                Contact me
              </button>
              <button className='outline-none rounded-md mx-5 ring-4 ring-[#253529] px-5 py-2 transform transition-all delay-150 duration-150 hover:scale-110 my-7 font-semibold text-[#253529]'>
                My Resume
              </button>
            </div>
          </div>
          <div className=''>
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
