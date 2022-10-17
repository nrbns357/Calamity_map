import type { NextPage } from 'next'
import Head from 'next/head'
import Map from '../components/Map'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>알려줄지도</title>
      </Head>
      <Map />
    </>
  )
}

export default Home
