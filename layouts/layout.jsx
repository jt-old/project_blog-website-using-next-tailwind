import Head from 'next/head'
import { Header, Footer } from '../components'

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
