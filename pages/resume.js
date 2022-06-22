import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Resume.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Resume = () => {
  return(
    <div className={styles.Resume}>
      <Head>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap');
        </style>
      </Head>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Resume;