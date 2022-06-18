import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import nameLogo from '../public/icons/svgs/namelogo.svg'

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
          <span className={styles.logo}>
            <Image src={nameLogo} alt="Image of my name" height={84} width={84}/>
          </span>
          <ul>
            <Navitem text="Projects" path="projects"/>
            <Navitem text="About" path="about" />
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