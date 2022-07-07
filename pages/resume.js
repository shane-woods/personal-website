import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Resume.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Resume = () => {
  return(
    <div className={styles.Resume}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      {/* <Document file={resume}>
        <Page pageNumber={1}/>
      </Document> */}
      <Footer />
    </div>
  )
}

export default Resume;