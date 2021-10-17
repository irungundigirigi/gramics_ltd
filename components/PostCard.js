import React from 'react'
import Image from 'next/image'
import styles from '../styles/postCard.module.css'
import cardImage from '../public/data-centre.jpg'
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
                        lorem ipsum dot emmet bla bajsdkj dkhfkjsdf kdfsfjkdhsf dfksejf fkdjladfskds fdhiejfrs dkfkerfdkjs
                    </p>
                    <button className={styles.cardBtn}> Read more</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PostCard
