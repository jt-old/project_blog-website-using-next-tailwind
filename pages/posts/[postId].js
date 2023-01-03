import Image from 'next/image'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import { Author, Error, Related, Spinner } from '../../components/_child'
import Layout from '../../layouts/layout.jsx'
import fetcher from '../../lib/fetcher.js'
import getPost from '../../lib/helper.js'

export default function Page(fallback) {
  const router = useRouter()

  const { postId } = router.query
  const { data, isLoading, isError } = fetcher(`/api/posts/${postId}`)

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <SWRConfig value={{ fallback }}>{data && <Article {...data} />}</SWRConfig>
  )
}

const Article = ({ title, img, author, subtitle, description }) => (
  <Layout>
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        {author && <Author {...author} />}
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          {title || 'Unknown'}
        </h1>

        <p className="text-gray-500 text-xl text-center">
          {subtitle || 'Unknown'}
        </p>

        <div className="py-10">
          <Image src={img || '/'} alt="..." width={900} height={600}></Image>
        </div>

        <div className="content text-gray 600 text-lg flex flex-col gap">
          {description || 'Unknown'}
        </div>
      </div>
      <Related />
    </section>
  </Layout>
)

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId)

  return {
    props: {
      fallback: {
        '/api/posts/': posts,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPost()

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }))

  return { paths, fallback: false }
}
