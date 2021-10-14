import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.services}>
        <div className={styles.header}>
          Products and Solutions
        </div>
        <div className={styles.carouselHolder}> 
           <Carousel />
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.header}>
            News and Articles
          </div>
         
      </div>
      <div className={styles.news}>
        <div className={styles.header}>
            Contact us
          </div>
      </div>
      
       
    </div>
  
    
  )
}
