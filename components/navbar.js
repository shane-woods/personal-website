import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import nameLogo from '../public/icons/svgs/namelogo.svg'

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
          <div className={styles.logo}>
            <Link href='/'>
              <a>Shane Woods
                &nbsp;<i className="las la-home"></i>
              </a>
            </Link>
            
          </div>
          <ul>
            <Navitem text="Resume" path="resume" />
            <Navitem text="Contact" path="contact" />
          </ul>
        </nav>
    )
}

const Navitem = (props) => {
  return (
    <li className={styles.Navitem}>
      <Link href={'/' + props.path}>
        <a>
          {props.text}
        </a>
      </Link>
  </li>
  )
}

export default Navbar