import React from 'react';
import styles from '../styles/welcome.module.css'
import welcome from '../public/welcome.png'
import Image from 'next/image'
const Welcome = () => {
    return (
        <div className={styles.welcomeHolder}>
            <div className={styles.welcomeHeading }>
                <Image src={welcome} ></Image>
            </div>
            <p>
            We are a Licensed Electrical Company specializing in  Solar Systems,Solar water pumps, Control Panels,Transformers, Generator Sales and Installation. 
            </p>
            
        </div>
    )
}

export default Welcome
