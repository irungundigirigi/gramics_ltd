import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import sps from '../../public/solarpumpS.png'


const SolarPumpingSystem = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={sps} />
        </div>    
        <div className={styles.productText}>
            Solar pumping systems are a solution to  the need of water in remote areas with no 
            electricity supply while understanding the importance of Green renewable energy.
            A solar pumping system is simple and includes the solar panel, the pump and the controller.
            We will install this system and provide  maintenance services to ensure the water keeps flowing clean.

        </div>
    </div>
    ) 
}
export default SolarPumpingSystem
