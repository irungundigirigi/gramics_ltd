import React from 'react'
import styles from '../styles/Carousel.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Solar from '../public/solar.jpg';
import SolarHeaters from '../public/solar-heater.jpg';
import DataCentre from '../public/data-centre.jpg';
import Image from 'next/image';



const Carousel = () => {
    return (
        <div>
            <AliceCarousel autoPlay autoPlayInterval="2000">
                <Image src={Solar} className={styles.sliderImg}/>
                <Image src={SolarHeaters} className={styles.sliderImg}/>
                <Image src={DataCentre} className={styles.sliderImg}/>
            </AliceCarousel>
        </div>
    )
}

export default Carousel
