import type { NextPage } from 'next'
import Head from 'next/head'
import Map from '../components/Map'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Head>
        <title>알려줄지도</title>
      </Head>
      <Map />
    </>
  )
}

export default Home
