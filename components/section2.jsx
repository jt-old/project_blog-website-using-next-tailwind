import Link from 'next/link'
import Image from 'next/image'
import { Author, Spinner, Error } from './_child'
import fetcher from '../lib/fetcher'

const Section2 = () => {
  const { data, isLoading, isError } = fetcher('/api/posts')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/*grid columns*/}
      <div className="grid md:grid-cols-2 lg:grid-col-3 gap-14">
        {data.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </div>
    </section>
  )
}

function Post({ data }) {
  const { id, title, category, published, img, author, subtitle } = data

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || '/'}
              className="rounded"
              width={500}
              height={350}
              alt="plant image"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || 'Unknown'}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              - {published || 'Unknown'}
            </a>
          </Link>
        </div>

        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || 'Unknown'}
            </a>
          </Link>
        </div>

        <p className="text-gray-500 py-3">{subtitle || 'Unknown'}</p>
        {author && <Author {...author} />}
      </div>
    </div>
  )
}

export default Section2
