import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return(
      <footer className={styles.Footer}>
        <div className={styles.Pagebreak}>
          <div className={styles.Footitem}>
            <Link href="https://www.linkedin.com/in/shane-woods-cs/">
              <a>
                <i className="lab la-linkedin la-3x" />
              </a>
            </Link>
          </div>
          <div className={styles.Footitem}>
            <Link href="mailto:shane.woods@unh.edu">
              <a>
                <i className="las la-envelope la-3x" />
              </a>
            </Link>
          </div>
          <div className={styles.Footitem}>
            <Link href="https://github.com/shane-woods">
              <a>
                <i className="lab la-github la-3x"/>
              </a>
            </Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer