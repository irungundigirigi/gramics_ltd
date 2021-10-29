import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import generators from '../../public/generators.png'


const Generators = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={generators} />
        </div>    
        <div className={styles.productText}>
            <p> Generator installation is an efficient way to to ensure automatic standby power that 
            works when you need it most. This guarantees emergency power for critical systems in
            the event of a power failure.
            </p>
            <p>
            We have long term experience in quality generator installation
            and maintenance for domestic and institutional needs. We also supply quality power generators
            at an affordable price.
            </p>
          
        </div>
    </div>
    ) 
}

export default Generators;


