import React from 'react'
import styles from '../styles/Hamburger.module.css'
import Link from 'next/link';
import { Transition, CSSTransition } from 'react-transition-group';


const Hamburger = ({in:inProps}) => (
      
      <CSSTransition 
         in= {true}
         timeout = {500}
         classNames = {styles.sidebar}
         unmountOnExit
         >
            <div className={styles.sidebar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                   <Link href='/'>Home</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/'>Services</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>About</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>Contact</Link>
                </li>
           </ul>
        </div>

      </CSSTransition>
    )


export default Hamburger
