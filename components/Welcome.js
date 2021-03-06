import React from 'react';
import styles from '../styles/welcome.module.css'
import welcome from '../public/welcome.png'
import { FaBars, FaPhone, FaFacebook, FaTwitter, FaInstagram }  from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link'
const Welcome = () => {
    return (
        <div className={styles.welcomeHolder}>
            <div className={styles.welcomeHeading }>
                <Image src={welcome} ></Image>
            </div>
            <div className={styles.welcomeText}>
                <p>
                We are a market leader and Licensed Electrical Company specializing in Solar Systems, Solar water pumps,
                Control Panels, Transformers and Generators; Sales, Installation and Maintanance. We are commited to providing customized 
                solution to every client.
                </p>
            </div>
            <div className={styles.social}>
                <Link href="https://twitter.com/gramics">
                    <FaTwitter className={styles.socialIcon}/>
                </Link>
                <Link href="https://twitter.com/gramics">
                    <FaFacebook className={styles.socialIcon}/>
                </Link>
                <Link href="https://twitter.com/gramics">
                 <FaInstagram className={styles.socialIcon }/>
                </Link>
            </div>
            
        </div>
    )
}

export default Welcome
