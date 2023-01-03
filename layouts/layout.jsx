import { Header, Footer } from '../components'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
