import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import HomeImage from '../public/images/Shane_Waterfall.jpeg'
import Link from 'next/link'

const Bio = () => {
    return (
        <div className={styles.Bio}>
						<div className={styles.Header}>
							<p>
								Hello! My name is Shane and I am a junior Computer Science student at the University of New Hampshire.
							</p>
						</div>
						<span className={styles.Pic}>
								<div className={styles.ImageWrap}>	
									<Image src={HomeImage} alt="Picture of me in front of a waterfall" height={320} width={300} />
								</div>
						</span>
        </div>
    )
}

export default Bio;