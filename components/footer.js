import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return(
      <footer className={styles.Footer}>
          <div className={styles.LinkedIn}>
            <Link href="https://www.linkedin.com/in/shane-woods-cs/">
              <a>
                <i class="lab la-linkedin la-3x" />
              </a>
            </Link>
          </div>
          <div className={styles.Email}>
            <Link href="mailto:shane.woods@unh.edu">
              <a>
                <i class="las la-envelope la-3x" />
              </a>
            </Link>
          </div>
          <div className={styles.GitHub}>
            <Link href="https://github.com/shane-woods">
              <a>
                <i class="lab la-github la-3x"/>
              </a>
            </Link>
          </div>
      </footer>
    )
}

export default Footer