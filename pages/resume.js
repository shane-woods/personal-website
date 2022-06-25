import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Resume.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Resume = () => {
  return(
    <div className={styles.Resume}>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Resume;