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
      <iframe src="https://universitysystemnh-my.sharepoint.com/personal/sjw1056_usnh_edu/_layouts/15/Doc.aspx?sourcedoc={4415d681-0361-425b-90b6-e03c1bd91bf8}&amp;action=embedview" width="50%" height="850px"></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Resume;