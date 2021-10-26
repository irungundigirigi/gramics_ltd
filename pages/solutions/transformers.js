import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import transformers from '../../public/transformersS.png'


const Transformers = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={transformers} />
        </div>    
        <div className={styles.productText}>
            A transformers are one of the most important compoments in your sub station and you can be confident that 
             we will assemble or repair it right
        </div>
    </div>
    ) 
}
export default Transformers;
