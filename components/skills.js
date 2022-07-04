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
      <div className={styles.Grid}>
        <div className={styles.Header}>
          <h3>Skills</h3>   
        </div>
        <div className={styles.c_cpp}>
          <i className="las la-terminal la-6x"></i>
          <p>C/C++</p>
        </div>
        <div className={styles.chip}>
          <Image src={chip} alt="Image of a computer chip" height={110} width={140}/>
          <p>Microcontroller Programming</p>
        </div>
        <div className={styles.java}>
          <i className="lab la-java la-6x"></i>
          <p>Java</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;