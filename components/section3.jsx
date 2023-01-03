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
      <Swiper slidesPerView={2}>
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
  const { id, title, category, date, img, author, subtitle } = data

  return (
    <div className="grid">
      <div className="images">
        <Link href={'/'}>
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
          <Link href={'/'}>
            <a className="text-orange-600 hover:text-orange-800">
              {category || 'Unknown'}
            </a>
          </Link>
          <Link href={'/'}>
            <a className="text-gray-800 hover:text-gray-600">
              - {date || 'Unknown'}
            </a>
          </Link>
        </div>

        <div className="title">
          <Link href={'/'}>
            <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
              {title || 'Unknown'}
            </a>
          </Link>
        </div>

        <p className="text-gray-500 py-3">{subtitle || 'Unknown'}</p>

        {author && <Author author={author} />}
      </div>
    </div>
  )
}
