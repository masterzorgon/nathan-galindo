import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import logoReact from '@/images/logos/react.svg'
import logoNest from '@/images/logos/nest.png'
import logoMongo from '@/images/logos/mongo.svg'
import logoSql from '@/images/logos/sql.png'
import logoAnchor from '@/images/logos/anchor.png'
import logoTailwind from '@/images/logos/tailwind.png'
import logoTypescript from '@/images/logos/ts.png'
import logoRust from '@/images/logos/rs.png'
import logoPython from '@/images/logos/py.png'
import logoR from '@/images/logos/r.png'
import logoSqlServer from '@/images/logos/sql-server.webp'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

function FrameworkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <div className='flex w-full justify-between'>
        <div>
          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
        </div>
        <div className='z-10'>
          <p className='border-2 border-transparent text-sm text-teal-500 dark:bg-zinc-800 bg-zinc-50 rounded-full px-3'>
            #{article.tag}
          </p>
        </div>
      </div>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const Frameworks = () => {
  const frameworks = [
    {
      name: "React.js",
      icon: logoReact,
      url: "https://reactjs.org/"
    },
    {
      name: "Tailwind CSS",
      icon: logoTailwind,
      url: "https://tailwindcss.com/"
    },
    {
      name: "Anchor",
      icon: logoAnchor,
      url: "https://www.anchor-lang.com/"
    },
    {
      name: "MongoDB",
      icon: logoMongo,
      url: "https://www.mongodb.com/"
    },
    {
      name: "SQL Server",
      icon: logoSqlServer,
      url: "https://www.microsoft.com/en-us/sql-server/"
    },
    {
      name: "Nest.js",
      icon: logoNest,
      url: "https://nestjs.com"
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FrameworkIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Frameworks and Tools</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {frameworks.map((tool, toolIndex) => (
          <li key={toolIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={tool.icon} alt="" className="object-cover h-8 w-8 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Tool</dt>
              <a target="_blank" href={tool.url} className="transition-all duration-150 mt-3 w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                {tool.name}
              </a>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};

const Languages = () => {
  const languages = [
    {
      name: "TypeScript",
      icon: logoTypescript,
      url: "https://www.typescriptlang.org/"
    },
    {
      name: "Rust",
      icon: logoRust,
      url: "https://www.rust-lang.org/"
    },
    {
      name: "Python",
      icon: logoPython,
      url: "https://www.python.org/"
    },
    {
      name: "R",
      icon: logoR,
      url: "https://www.r-project.org/about.html#:~:text=R%20is%20a%20language%20and,by%20John%20Chambers%20and%20colleagues."
    },
    {
      name: "SQL",
      icon: logoSql,
      url: "https://www.w3schools.com/sql/"
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <CodeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Languages</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {languages.map((lang, langIndex) => (
          <li key={langIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={lang.icon} alt="" className="object-cover h-8 w-8 rounded-full" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Language</dt>
              <a target="_blank" href={lang.url} className="transition-all duration-150 mt-3 w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 dark:hover:text-teal-500 hover:text-teal-500">
                {lang.name}
              </a>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image5, image4].map((image, imageIndex) => (
          <div
            key={image.src}
            className={
              `hover:rotate-0 ${rotations[imageIndex % rotations.length]} inset-0 hover:-inset-2 transition-all duration-300 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl`
            }
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Nathan Galindo - Software developer, researcher, and guitarist.
        </title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐻</text></svg>" />
        <meta
          name="description"v
          content="I’m Nathan."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Learner. Builder. Explorer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Nathan, a generalist currently working on building a more inclusive financial system at marginfi. I am constantly learning and exploring new ideas, and am never shy of a challenge.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/masterzorgon"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
              target="_blank"
            />
            <SocialLink
              href="https://github.com/masterzorgon"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <SocialLink
              href="https://www.linkedin.com/in/nathan-galindo/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>
      <Photos />
      
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.slice(0, 3).map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Frameworks />
            <Languages />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
