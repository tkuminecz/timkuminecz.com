import type { NextPage } from 'next'
import Head from 'next/head'
import Splash from '../src/Splash'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>timkuminecz.com</title>
      </Head>
      <Splash/>
    </>
  )
}

export default Home
