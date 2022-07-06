import React from 'react'
import styles from '../styles/Skills.module.css'
import chip from '../public/icons/logos/chip.png'
import c_cpp from '../public/icons/logos/c_cpp.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Skills = () => {
  return (
    <div className={styles.Skills}>
      <div className={styles.Pagebreak}>
        <div className={styles.Grid}>
          <div className={styles.Header}>
            <h1>Skills</h1>   
          </div>
          <div className={styles.c_cpp}>
            <i className="las la-terminal la-8x"></i>
            <p>C/C++</p>
          </div>
          <div className={styles.chip}>
            <Image src={chip} alt="Image of a computer chip" height={140} width={180}/>
            <p>Microcontroller Programming</p>
          </div>
          <div className={styles.java}>
            <i className="lab la-java la-8x"></i>
            <p>Java</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;