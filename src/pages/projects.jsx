import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Vlyss',
    description:
      "Vlyss is a fintech startup I founded that uses blockchain technology to enhance the speed and security of international payments.",
    link: { href: 'https://vlyss.com', label: 'vlyss.com' },
    logo: "",
  },
  {
    name: 'Futura Energy',
    description:
      "This white paper was drafted for Schneider Electric's 2022 Go Green international pitch competition. In this paper, Karis Anoruo and I ideate a micro grid energy system which leverages blockchain technology to create a more economically democratic energy system in Lagos, Nigeria, and other developing economies.",
    link: { href: 'https://drive.google.com/file/d/1OONO5sOp-Wglg1UBoI7NIxzeHwIbIzWR/view?usp=sharing', label: 'drive.google.com' },
    logo: "",
  },
  {
    name: 'NFT Analysis and Design Paradigms Applied to Invoicing',
    description:
      "This repository contains the code for my thesis. It is a proof of concept that uses NFTs to create a more efficient e-invoicing system. This particular implementation uses Solana concurrent Merkle tree technology to create a decentralized invoicing system that could potentially scale to enterprise-level use.",
    link: { href: 'https://marble-target-926.notion.site/NFT-Analysis-and-Design-Paradigms-Applied-to-U-S-Invoicing-238ffe88d35540bc9081dfb59660b48b', label: 'notion.io' },
    logo: "",
  },
  {
    name: "Helius Frontend Development Bootcamp",
    description:
      "I developed an app and an entire YouTube series to teach people how to develop frontend applications on Solana using Helius tooling.",
    link: { href: "https://www.youtube.com/watch?v=8azRe9PRLg0&list=PLMZny7wGLM6w4t7pMGATxFTjjMduTsEiF", label: "YouTube" },
    logo: ""
  },
  {
    name: "Solana Backend Development Bootcamp",
    description:
      "This Notion page details a six week bootcamp designed to teach students how to develop Solana smart contracts. By the end of this course, the student should have a solid conceptual of what blockchain is, why it matters, and how to develop intermediate Solana smart contracts.",
    link: { href: "https://marble-target-926.notion.site/Solana-Development-Bootcamp-7d59ddd5cc1849aab4b543f378087665", label: "notion.io" },
    logo: ""
  },
  {
    name: "Baylor Bridges",
    description:
      "Baylor Bridges is a professional networking platform designed to help Baylor University students make meaningful connections with Baylor alumni working in the medical industry.",
    link: { href: "https://youtu.be/SwaDLrJovjk", label: "youtube.com" },
    logo: ""
  },
  {
    name: "The Blockchain Collaborative",
    description:
      "The Blockchain Collaborative is a student organization at Baylor University dedicated to raising the next generation of innovators in the blockchain industry.",
    link: { href: "https://www.tbcollaborative.rocks/", label: "tbcollaborative.rocks" },
    logo: ""
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nathan Galindo</title>
        <meta
          name="description"
          content="My projects over the years."
        />
      </Head>
      <SimpleLayout
        title="My projects over the years."
        intro="Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.logo !== "" && <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>}
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link target="_blank" href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>
                {project.description}
              </Card.Description>
              <p className=" relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
