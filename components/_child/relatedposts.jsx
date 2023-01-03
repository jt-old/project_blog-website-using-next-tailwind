import Image from 'next/image'
import Link from 'next/link'
import fetcher from '../../lib/fetcher'
import { Author, Error, Spinner } from './'

const Related = () => {
  const { data, isLoading, isError } = fetcher('/api/trending')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {data.map((data, index) => (
          <Post key={index} data={data} />
        ))}
      </div>
    </section>
  )
}

function Post({ data }) {
  const { title, category, img, published, author } = data

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || '/'}
              className="rounded"
              width={300}
              height={200}
              alt="plant image"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
        {author && <Author {...author} />}
      </div>
    </div>
  )
}

export default Related
