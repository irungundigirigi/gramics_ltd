import styles from '../styles/home2.module.css';
import Carousel from '../components/Carousel';

import React from 'react'

export default function home() {
    return (
        <div className={styles.container}>
            <div className={styles.carouselHolder}>
                <Carousel />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutText}>
                    <h2>ABOUT US</h2>    
                    We are a market leader and Licensed Electrical Company specializing in Solar Systems, Solar water pumps,
                    Control Panels, Transformers and Generators; Sales, Installation and Maintanance. We are commited to providing customized 
                    solution to every client.
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
