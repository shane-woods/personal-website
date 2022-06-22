import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import nameLogo from '../public/icons/svgs/namelogo.svg'

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
          <Head>
          <style>
						@import url('https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap');
					</style>
          </Head>
          <span className={styles.logo}>
            <Image src={nameLogo} alt="Image of my name" height={72} width={200}/>
          </span>
          <ul>
            <Navitem text="Projects" path="#"/>
            <Navitem text="Resume" path="resume" />
            <Navitem text="Contact" path="#" />
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