import { useRouter } from 'next/router'
import { Products } from '../../data/products'
import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Card.module.css'


const Product = () => {
     const router = useRouter()
     const  pid = router.query.productId
    var product = Products.find(p => p.pId == pid)

    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={product.image} />
        </div>
        
        
    </div>
    ) 
}

export default Product






