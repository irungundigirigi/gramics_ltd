import React from 'react';
import styles from '../styles/welcome.module.css'
import welcome from '../public/welcome.png'
import { FaBars, FaPhone, FaFacebook, FaTwitter, FaInstagram }  from 'react-icons/fa';
import Image from 'next/image'
const Welcome = () => {
    return (
        <div className={styles.welcomeHolder}>
            <div className={styles.welcomeHeading }>
                <Image src={welcome} ></Image>
            </div>
            <div className={styles.welcomeText}>
                We are a market leader and Licensed Electrical Company specializing in Solar Systems, Solar water pumps,
                Control Panels, Transformers, Generator Sales, Installation and services. We are commited to providing customized 
                solution to every client.
            </div>
            <div className={styles.social}>
                <FaFacebook className={styles.socialIcon}/>
                <FaTwitter className={styles.socialIcon}/>
                <FaInstagram className={styles.socialIcon }/>
            </div>
            
        </div>
    )
}

export default Welcome
