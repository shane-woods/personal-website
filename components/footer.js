import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import LinkedIn from '../public/icons/logos/linkedin.png'
import GitHub from '../public/icons/logos/github.png'
import Email from '../public/icons/logos/email.png'
import Head from 'next/head'



const Footer = () => {
    return(
        <footer className={styles.Footer}>
          <div className={styles.Line}></div>
          <Footitem src={LinkedIn} name="LinkedIn" path="https://www.linkedin.com/in/shane-woods-cs/" />
          {/* <a href="https://www.flaticon.com/free-icons/mail" title="mail icons">All icons created by Freepik - Flaticon</a> */}
        </footer>
    )
}

const Footitem = (props) => {
    return (
        <div className={styles.Footitem}>
            <Link href={props.path}>
                <a>
                    <Image src={props.src} alt={props.name + 'Logo'} height={64} width={64} />
                </a>
            </Link>
        </div>
    )
}

export default Footer