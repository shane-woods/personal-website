import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </Head>
      <Navbar />
        <div className={styles.Container}>
          <h2>To contact me, use the information below!</h2>
          <div className={styles.Info}>
            <h3>Email: </h3>
            <p>shwoods35@gmail.com</p>
            <h3>Phone: </h3>
            <p>&#40;413&#41;&nbsp;&nbsp;302 - 0189</p>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Contact;