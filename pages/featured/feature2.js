import React,{useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/blog-card.module.css'
import cp from '../../public/turkana-wind-farm.jpg'
import {FaAngleDown} from 'react-icons/fa'


const Feature2 = () => {

    const [read, setRead]= useState(false)

    const toggleRead =() => {
        setRead(!read)
        
    }
    return (
    <div className={styles.blogCard}>
        <div className={styles.blogImageContainer}>
            <Image className={styles.blogImage} src={cp} />
        </div>    
        <div className={styles.blogContent}>
            <div className={styles.blogHeader}>
                KENYA STEPS FORWARD TOWARDS RENEWABLE ENERGY.
            </div>
            <div className={styles.blogText}>
                <div className={styles.line}>
                </div>
                <div className={read? styles.paragraph : styles.paragraphOn}>
                    Renewable energy comes from natural sources that are constantly replenished such as wind and sunlight.
                    Renewables becoming important and there are plans to move Kenya to 100% green energy by 2020 to mitigate climate by reducing carbon emission by 
                    displacing fossil fuels in the power sector. Currently, 70% of Kenyas installed electricity comes from renewable energy 
                    sources and we are already  a leader in exploiting renewable energy sources in Africa.
                    
                    

                </div>
            </div>
        <div className={styles.btnHolder}>
            <button className={styles.btn} onClick={toggleRead}><FaAngleDown className={styles.arrow} /></button>

        </div>
        </div>
    </div>
    ) 
}

export default Feature2;
