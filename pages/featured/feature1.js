import React,{useState} from 'react'
import Image from 'next/image'
import styles from '../../styles/blog-card.module.css'
import cp from '../../public/solar-rainy.jpg'
import {FaAngleDown} from 'react-icons/fa'


const Feature1 = () => {

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
                DO SOLAR PANELS WORK ON CLOUDY DAYS?
            </div>
            <div className={styles.blogText}>
                <div className={styles.line}>
                </div>
                <div className={read? styles.paragraph : styles.paragraphOn}>
                    Adoption of solar panels has taken  the world by storm over the last
                    decade due to the increasing demand for clean energy while potentially cutting
                    your electric bills. Here in Kenya, solar power has provided
                    a solution to energy needs in areas with no electricity power. But, can solar work on cloudy days or with minimal sun exposure?
                    Photovoltaic solar panels are more effective in direct sunlight but will still generate 10% to 25% of the normal power output even 
                    on days with minimal sun exposure.


                </div>
            </div>
        <div className={styles.btnHolder}>
            <button className={styles.btn} onClick={toggleRead}><FaAngleDown className={styles.arrow} /></button>

        </div>
        </div>
    </div>
    ) 
}

export default Feature1;
