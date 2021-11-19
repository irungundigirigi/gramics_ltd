import React from 'react'
import styles from '../styles/Carousel.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Solar from '../public/solar.png';
import SolarHeaters from '../public/solar-heater.png';
import DataCentre from '../public/data-centre.png';
import Transformers from '../public/transformers.png';
import GeneratorSales from '../public/GeneratorsSales.png';
import Renewable from '../public/renewable.png'
import cleanEnergy from '../public/cleanEnergy.png'



import Image from 'next/image';
import { Transition } from 'react-transition-group';



const Carousel = () => {
    return (
        <div className={styles.Carousel}>
            <AliceCarousel 
                disableButtonsControls= {true}
                disableDotsControls = {false}
                autoPlay autoPlayInterval="4000">
                <Image src={Transformers} className={styles.sliderImg}/>
                <Image src={Solar} className={styles.sliderImg}/>
                <Image src={SolarHeaters} className={styles.sliderImg}/>
                <Image src={DataCentre} className={styles.sliderImg}/>
                <Image src={cleanEnergy} className={styles.sliderImg}/>
                <Image src={GeneratorSales} className={styles.sliderImg}/>
            </AliceCarousel>
        </div>
    )
}

export default Carousel
