import React from 'react'
import styles from '../styles/footer.module.css'
import {MdLocationOn} from 'react-icons/md'
import {IoIosMail} from 'react-icons/io'
import {FaPhone} from 'react-icons/fa'
import epra from '../public/epra.png'
import nca from '../public/nca.png'
import rerec from '../public/rerec.png'
import kplc from '../public/kplc.png'
import abb from '../public/abb.jpg'
import schneider from '../public/schneider.png'
import MoE from '../public/MoE.jpeg'






import Image from 'next/image'





const Footer = () => {
    return (
        <div className = {styles.footer}>
             <div className={styles.label}>OUR PARTNERS</div>
            
           
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
                <div className={styles.footerLogoContainer}>
                    <Image src={schneider} className={styles.footerLogo} /> 
                </div>
                <div className={styles.footerLogoContainer}>
                    <Image src={abb} className={styles.footerLogo} /> 
                </div>
                <div className={styles.footerLogoContainer}>
                    <Image src={MoE} className={styles.footerLogo} /> 
                </div>
            </div>
            
            <div className={styles.label}>GET IN TOUCH</div>

            <div className={styles.footerAdress}>
                <div className={styles.footerText}><FaPhone className={styles.footerIcons} /><span>0724647209 0737898643</span></div>
                <div className={styles.footerText}><IoIosMail className={styles.footerIcons}/><span>office@gramics.co.ke</span></div>
                <div className={styles.footerText}><MdLocationOn className={styles.footerIcons}/><span>Gill Hse, 1st Floor, Suite 16</span></div>
            </div>
            
        </div>
    )
}

export default Footer
