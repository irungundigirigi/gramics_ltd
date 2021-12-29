import styles from '../styles/home2.module.css';
import Carousel from '../components/Carousel';
import { FaBars, FaPhone, FaFacebook, FaTwitter, FaInstagram }  from 'react-icons/fa';
import Link from 'next/link'
import React from 'react'

export default function home() {
    return (
        <div className={styles.container}>
            <div className={styles.carouselHolder}>
                <Carousel />
            </div>
            <div className={styles.contentContainer}>

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
                <div className={styles.aboutContainer}>
                    
                    <div className={styles.aboutText}>
                    <h2>ABOUT US</h2>    
                        We are a market leader and Licensed Electrical Company specializing in Solar Systems, Solar water pumps,
                        Control Panels, Transformers and Generators; Sales, Installation and Maintanance. We are commited to providing customized 
                        solution to every client.  
                        GRAMICS was established in 2010 with the objective of carrying out business as contractors in Electrical
                        Engineering Services, Generator Installation and Maintenance, solar works, Information Communication and Technology (ICT)
                        Infrastructure Development. with a LEED, EPRA NCA certification, specializing in Electrical Engineering service,  Design 
                        for Governmental, residential, and commercial projects. We have designed thousands of projects with a wide range of design
                        expertise. We designed Beautification projects  for Migaa Golf Estate in kiambu. We also designed parks and recreational 
                        areas,schools ,fire sprinkler system, and designed a new lighting system which is energy efficient with an energy management 
                        system.
                    </div>

                    <div className={styles.aboutText}>
                    <h2>SERVICES</h2>    
                    <ul>
                        <li>Electrical System Analysis, Assesment and Planning</li>
                        <li> Power Distribution Analysis and Design</li>
                        <li>Emergency Standby and  Cogeneration Systems</li>
                        <li>Medium Voltage System Design</li>
                        <li>Fault Current/ Arc Flash/ Coordination Studies</li>
                        <li> Lighting Design and Controls</li>
                        <li>Energy Code and LEED Compliance</li>
                        <li>Fire Alarm Systems</li>
                        <li>Paging/Public Address/ Sound Systems</li>
                        <li>Solar Photovolataic(PV) Systems</li>
                        <li>Low Voltage and Communications Systems</li>
                        <li>UPS(Uninterruptible Power Supply) Systems</li>
                        <li>Energy Audits Power Quality Management</li>
                    </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
