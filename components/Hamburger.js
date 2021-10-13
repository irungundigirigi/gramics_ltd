import React from 'react'
import styles from '../styles/Hamburger.module.css'
import Link from 'next/link';


const Hamburger = () => {

    return (
        <div className={styles.sidebar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                   <Link href='/'>Home</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/'>Shop</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>About</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>Contact</Link>
                </li>
           </ul>
        </div>
    )
}

export default Hamburger
