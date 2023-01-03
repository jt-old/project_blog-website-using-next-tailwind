import Image from 'next/image'
import Link from 'next/link'
import { Author, Spinner, Error } from './_child'
import fetcher from '../lib/fetcher'
// Swiper Components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

const Section1 = () => {
  const { data, isLoading, isError } = fetcher('/api/trending')

  if (isLoading) return <Spinner />
  if (isError) return <Error />

  SwiperCore.use({ Autoplay })

  const background = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: 'right',
  }

  return (
    <section className="py-16" style={background}>
      <div className="container:mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {data.map((data, index) => (
            <SwiperSlide key={index}>
              <Slide data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function Slide({ data }) {
  const { id, title, category, date, img, author, subtitle } = data

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={'/'}>
          <a>
            <Image
              src={img || '/'}
              width={600}
              height={600}
              alt="plant image"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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

export default Section1
