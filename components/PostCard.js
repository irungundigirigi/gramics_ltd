import React from 'react'
import Image from 'next/image'
import styles from '../styles/postCard.module.css'
import Carousel from './Carousel'

const PostCard = () => {
    return (
    <div className={styles.grid}>
        <div className={styles.gridItem}>
            <div className={styles.card}>
            <Carousel />
                <div className={styles.cardContent}>
                    <h1 className={styles.cardHeader}>Why us?</h1>
                    <p className={styles.cardText}>
                    GRAMICS POWER SYSTEMS LTD was established in 2010 with the objective of carrying out business as contractors in Electrical Engineering Services, Generator Installation and Maintenance, solar works, Information Communication and Technology (ICT) Infrastructure Development. with a LEED, EPRA NCA certification, specializing in Electrical Engineering service,  Design for Governmental, residential, and commercial projects. We have designed thousands of projects with a wide range of design expertise. We designed Beautification projects  for Migaa Golf Estate in kiambu. We also designed parks and recreational areas,schools ,fire sprinkler system, and designed a new lighting system which is energy efficient with an energy management system.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    )
}

export default PostCard
