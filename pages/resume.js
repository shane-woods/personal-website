import Head from 'next/head'
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
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </Head>
      <Navbar />
      <div className={styles.Viewer}>
        <iframe className={styles.frame} src="https://docs.google.com/document/d/e/2PACX-1vS7Qc0n-Qb1S5NBJ6QnotNB3areo_eXIE108v4AsBYn3RMzc-ORXIda0clV28csjA/pub?embedded=true"></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;