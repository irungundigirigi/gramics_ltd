import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'
import PostCard from '../components/PostCard'
import Welcome from '../components/Welcome'


export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Welcome />
      <div className={styles.aboutUs}>
         <PostCard/>
      </div>
        
      
    </div>
  
    
  )
}
