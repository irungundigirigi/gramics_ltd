import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'
import PostCard from '../components/PostCard'
import Welcome from '../components/Welcome'



export default function Home() {
  return (<>  
    <Head>
      <meta name= "description" content="Gramics Power Systems Solar Panels | Solar Water Heating Systems" />
      <meta name= "keywords" content="Gramics Power Systems Solar Panels | Solar Water Heating Systems" />
      <title>Gramics -Solar solutions | Electrical supplies and Installations |</title>
      <link rel="icon" sizes="32x32" href="icon.png" />
    </Head>


    <div className={styles.pageContainer}>
      <Welcome />
      <div className={styles.aboutUs}>
         <PostCard/>
      </div>

      <div className={styles.otherServices}>
      <p>
        <h3 className={styles.cardHeader}>SERVICES</h3>
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
      </p>
      </div>
    </div>
    </>
  )
}
