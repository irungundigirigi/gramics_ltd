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
            <p>
            Solar pumping systems are a solution to  the need of water in remote areas with no 
            electricity supply while understanding the importance of Green renewable energy.
            </p>
            <p>
            A solar pumping system is simple and includes the solar panel, the pump and the controller.
            We will install this system and provide  maintenance services to ensure the water keeps flowing clean.
            </p>
        </div>
    </div>
    ) 
}
export default SolarPumpingSystem
