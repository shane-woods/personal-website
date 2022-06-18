import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'



const Footer = () => {
    return(
        <div className={styles.Footer}>
        </div>
    )
}

const Footitem = (props) => {
    return (
        <div className={styles.Footitem}>
            <Link href={'/' + props.path}>
                <a>
                    <Image src={props.src} alt={props.alt} height={0} width={0} />
                </a>
            </Link>
        </div>
    )
}

export default Footer