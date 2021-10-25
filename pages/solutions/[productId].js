import { useRouter } from 'next/router'
import { Products } from '../../data/products'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'


const Solutions = () => {
    const router = useRouter()
    const  pid = router.query.productId
    var product = Products.find(p => p.pId == pid)
    

    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={product.image} />
        </div>    
        <div className={styles.productText}>
            {product.body}
        </div>
    </div>
    ) 
}

export default Solutions






