import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import HomeImage from '../public/images/Shane_Waterfall.jpeg'
import Link from 'next/link'

const Bio = () => {
    return (
			<div className={styles.Container}>
				<div className={styles.Bio}>
					<span className={styles.Pic}>
							<div className={styles.ImageWrap}>	
								<Image src={HomeImage} alt="Picture of me in front of a waterfall" height={530} width={500} />
							</div>
					</span>
					<div className={styles.About}>
						<p>
							Hello! My name is Shane and I am a junior Computer Science student at the University of New Hampshire.
						</p>
					</div>
				</div>
			</div>
    )
}

export default Bio;