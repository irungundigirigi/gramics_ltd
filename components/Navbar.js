import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css';
import Logo from '../public/icon.png';
import { FaBars, FaPhone, FaFacebook, FaTwitter, FaInstagram }  from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'





const Navbar = () => {
    const[inProps, setInProps] = useState(false)
    const[style, setStyle] = useState('styles.linksHolder')

    const menuClicked = () => {
       setInProps(!inProps)
       setStyle('styles.linksHolder-active')
       
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

           <div style={style.linksHolder }>
              <ul className={styles.ul}>
                <li className={styles.li}>
                   <Link href='/'>Home</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/'>Services</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>Products</Link>
                </li>
                
                <li className={styles.li}>
                   <Link href='/about'>About</Link>
                </li>
                <li className={styles.li}>
                   <Link href='/about'>Contact</Link>
                </li>
               </ul>
            </div>
            <div className={styles.search}>
            </div>
           <div className={styles.hamburger}>
               {inProps?<AiOutlineClose   onClick={menuClicked}/> : <FaBars  className={styles.fabars} onClick={menuClicked}/> }
           </div>
           <div className={styles.mobileLinks }>
              <ul className={inProps? styles.mobileUl: styles.mobileUlOff}>
                <li className={styles.mobileLi}>
                   <Link href='/'><span className={styles.span}><span className={styles.linkText}>Home</span></span></Link>
                </li>
                <li className={styles.mobileLi}>
                   <Link href='/'>Services</Link>
                </li>
                <li className={styles.mobileLi}>
                   <Link href='/about'>Products</Link>
                </li>
                
                <li className={styles.mobileLi}>
                   <Link href='/about'>About</Link>
                </li>
                <li className={styles.mobileLi}>
                   <Link href='/about'>Contact</Link>
                </li>
               </ul>
            </div>
       </nav>
      
        
    </>   
    )
}
export default Navbar
