import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Author, Spinner, Error } from './_child'
import fetcher from '../lib/fetcher'

const Section3 = () => {
  const { data, isLoading, isError } = fetcher('/api/popular')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <Post data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Section3

function Post({ data }) {
  const { id, title, category, published, img, author, subtitle } = data

  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || '/'}
              width={600}
              height={400}
              alt="post-graphic"
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
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
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
