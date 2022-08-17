import Layout from '../../layouts/layout'
import Author from '../../components/_child/author'
import Image from 'next/image'
import Related from '../../components/_child/relatedposts'

export default function Page() {
  return (
    <Layout>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
        <div className='flex justify-center'>
          <Author></Author>
        </div>

        <div className='post py-10'>
          <h1 className='font-bold text-4xl text-center pb-5'>
            This is a fancy title
          </h1>

          <p className='text-gray-500 text-xl text-center'>
            There is text and text and text and even more text. Oh my, look at
            all of the text for this blog post
          </p>

          <div className='py-10'>
            <Image src={'/images/img1.jpeg'} width={900} height={600}></Image>
          </div>

          <div className='content text-gray 600 text-lg flex flex-col gap'>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>Paragraph 3</p>
            <p>Paragraph 4</p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Layout>
  )
}
