import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import solar from '../../public/solarS.png'


const Solar = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={solar} />
        </div>    
        <div className={styles.productText}>
            Solar electric power is a very important move towards clean energy production.
            More importantly it will help you save significantly on electricity cost and also increase your property value .
            Say yes to clean solar energy and our dedicated team will efficiently  install your panels for the highest
            aesthetic apppel while protecting the intergrity of your roof. To ensure optimal longevity and effiency we 
            also provide maintenance services for you!

        </div>
    </div>
    ) 
}
export default Solar;
