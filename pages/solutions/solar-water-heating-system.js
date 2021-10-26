import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import swhs from '../../public/SolarHeatingS.png'


const Generators = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={swhs} />
        </div>    
        <div className={styles.productText}>
            Although there are different types of solar water-heating systems, the basic process is straight-forward. Water is heated by the sun whilw it goes through a solar panel or a collector.
            The process is repeated over and over and the water temperatures rise every time. Solar tanks are insulated to keep heat
            loss to the minimum. This reduces the use of electricity or fuel by as much as 80%!
            
        </div>
    </div>
    ) 
}

export default Generators;