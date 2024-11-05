import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nathan Galindo</title>
        <meta
          name="description"
          content="I’m Nathan. I'm working on building a more inclusive financial system."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Nathan. I'm working on building a more inclusive financial system
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                At Baylor University, I worked as a cybersecurity analyst while studying finance and information systems.
                Throughout my college career, I worked multiple finance and tech-related internships, including a co-op at Philosophy Group (a Houston-based, boutique hedge fund) and a software engineering role at Helius — one of the fastest growing startups in Silicon Valley.

                While at univeristy, I also held multiple leadership positions in the Baylor Honors College, <a target="_blank" href="https://www.tbcollaborative.rocks/" className='underline dark:hover:text-teal-500'>The Blockchain Collaborative</a> and <a target="_blank" href="https://firstinline.web.baylor.edu/" className='dark:hover:text-teal-500 underline'>the Baylor First In Line Student Association</a>.
              </p>
              <p>
                Currently, I am The Co-Founder of <a target="_blank" href="https://vlyss.com" className='dark:hover:text-teal-500 underline'>Vlyss</a>, a multi-disciplenary agency that creates websites that drive sales and conversions for small businesses and startups.
                I also lead the Developer Relations function at <a target="_blank" href="https://marginfi.com" className='dark:hover:text-teal-500 underline'>MarginFi</a>, one of the largest lending platforms in decentralized finance. As the Lead Developer Relations Engineer, I handle our B2B conversations and oversee all integrations work with other projects. The role allows me to exercise my passion for software development while also utilizing my business savvy and communication skills.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/_zebedee_" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/nathanzebedee" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/nathan-galindo/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:nathan_galindo1@baylor.edu"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                nathan_galindo1@baylor.edu
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
