import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Solutions.module.css'
import cp from '../../public/controlPanelS.png'


const ControlPanels = () => {
    return (
    <div className={styles.productHolder}>
        <div className={styles.cardImage}>
            <Image className={styles.image} src={cp} />
        </div>    
        <div className={styles.productText}>
            <p>
            Electrical control panels contains very important electrical components that control and monitor different mechanical processes.
           They are an intergral part of any automated manufacturing process and safe operation is very important because problems with 
           them can cause havoc to business operation or even endanger employees.
            </p>
            <p>
            With this in mind, our team of professionals will install high quality
           control panels for you to meet your individual needs so that they can function safely and reliably. We also provide
           planned preventative maintenance and condition based monitoring.

            </p>
           


        </div>
    </div>
    ) 
}

export default ControlPanels;