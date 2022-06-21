import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import HomeImage from '../public/images/Shane_Waterfall.jpeg'
import Link from 'next/link'

const HomeBio = () => {
    return (
        <div className={styles.Bio}>
					<div className={styles.Grid}>
						<div className={styles.Header}>
								<h1>Student at UNH</h1>
								<h1>Undergraduate Research Assistant</h1>
								<h1>President of UNH Wrestling</h1>
						</div>
						<span className={styles.Pic}>
								<div className={styles.ImageWrap}>	
									<Image src={HomeImage} alt="Picture of me in front of a waterfall" height={360} width={300} />
								</div>
						</span>
						<p>
							Hello! My name is Shane and I am a junior Computer Science Student at the University of New Hampshire.
						</p>
					</div>
        </div>
    )
}

export default HomeBio;