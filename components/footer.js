import React from 'react'
import styles from '../styles/footer.module.css'
import {MdLocationOn} from 'react-icons/md'
import {IoIosMail} from 'react-icons/io'
import {FaPhone} from 'react-icons/fa'
import epra from '../public/epra.png'
import nca from '../public/nca.png'
import rerec from '../public/rerec.png'
import kplc from '../public/kplc.jpeg'
import Image from 'next/image'





const Footer = () => {
    return (
        <div className = {styles.footer}>
            <div className={styles.footerAdress}>
                <div className={styles.footerText}><FaPhone className={styles.footerIcons} /><span>0724647209 0737898643</span></div>
                <div className={styles.footerText}><IoIosMail className={styles.footerIcons}/><span>gramicspowersystems@gmail.com</span></div>
                <div className={styles.footerText}><MdLocationOn className={styles.footerIcons}/><span>Gill Hse, 1st Floor, Suite 16</span></div>
            </div>
            <div className={styles.partners}>
                
                <div className={styles.footerLogoContainer}>
                    <Image src={epra} className={styles.footerLogo} /> 
                </div>
                <div className={styles.footerLogoContainer}>
                    <Image src={nca} className={styles.footerLogo} /> 
                </div>
                <div className={styles.footerLogoContainer}>
                    <Image src={kplc} className={styles.footerLogo} /> 
                </div>
                <div className={styles.footerLogoContainer}>
                    <Image src={rerec} className={styles.footerLogo} /> 
                </div>
            </div>
        </div>
    )
}

export default Footer
