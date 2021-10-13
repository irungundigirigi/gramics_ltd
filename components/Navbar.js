import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css';
import Logo from '../public/icon.png';
import { FaBars }  from 'react-icons/fa';
import Hamburger from '../components/Hamburger';



const Navbar = () => {
    const[menu, setMenu] = useState(false)

    const menuClicked = () => {
       setMenu(!menu)
    }

   
    
    return (
    <>
       <nav className={styles.nav}>
           <div className={styles.logoContainer}>
                <div className={styles.logo}>
                        <Image src={Logo} />
                </div>
                <span className={styles.logoLabel}>GRAMICS</span>
           </div>
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
           <div className={styles.hamburger}>
               <FaBars  className={styles.fabars} onClick={menuClicked}/>
              
           </div>
       </nav>
       <div className={styles.hamburgerMenu}>
        {menu && <Hamburger />}
       </div>
    </>   
    )
}

export default Navbar
