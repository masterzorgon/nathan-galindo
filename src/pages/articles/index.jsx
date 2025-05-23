import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
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
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Nathan Galindo</title>
        <meta
          name="description"
          content="Any and all content on this website is produced for educational and inspirational purposes only. Nothing on this website should be considered financial advice. I do not sanction or encourage the deployment of applications that violate applicable laws or regulations."
        />
      </Head>
      <SimpleLayout
        title="Writing on technology and other interests."
        intro="Any and all content on this website is produced for educational and inspirational purposes only. Nothing on this website should be considered financial advice. I do not sanction or encourage the deployment of applications that violate applicable laws or regulations."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
