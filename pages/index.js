import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HomeBio from '../components/homebio'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <style>
					@import url(&lsqohttps://fonts.googleapis.com/css2?family=Encode+Sans&display=swap&rsqo);
				</style>
      </Head>
      <Navbar />
      <HomeBio />
      <Footer />
    </div>
  )
}
