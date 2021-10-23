import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css';
import Logo from '../public/icon.png';
import { FaBars, FaToggleOff }  from 'react-icons/fa';
import {MdElectricalServices, } from 'react-icons/md'
import {GiElectric} from 'react-icons/gi'
import { AiOutlineClose,AiFillHome  } from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {IoIosMail} from 'react-icons/io'





const Navbar = () => {
    const[inProps, setInProps] = useState(false)
    const[serviceMenu, setServiceMenu] = useState(false)
    const[productsMenu, setProductsMenu] = useState(false)
    
  

    const menuClicked = () => {
       setInProps(!inProps)
       
    }
    const toggleServiceMenu = () => {
       setServiceMenu(!serviceMenu)
    }
    const toggleProductsMenu = () => {
      setProductsMenu(!productsMenu)
   }
    
    return (
    <>
       <nav className={styles.nav}>
           <div className={styles.logoContainer}>
                <div className={styles.logo}>
                        <Image src={Logo} />
                </div>
                <span className={styles.logoLabel}></span>
           </div>

           <div className={styles.linksHolder }>
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
               {inProps?<AiOutlineClose  className={styles.fabars}  onClick={menuClicked}/> : <FaBars  className={styles.fabars} onClick={menuClicked}/> }
           </div>
           <div className={inProps? styles.sidebar: styles.sidebarOff}>
              <div className={styles.menu} >
                <item className={styles.item}>
                  <div className={styles.link}> 
                     <AiFillHome className={styles.menuIcon}/>
                     <Link href='/'>Home</Link>
                  </div>
                  
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <GiElectric className={styles.menuIcon}/>
                     <div>Services</div>
                     <RiArrowDropDownLine className={styles.dropDown} onClick={toggleServiceMenu}/>
                   </div>
                   <div className={serviceMenu? styles.subMenu: styles.subMenuOff}>
                     <Link href='/'>Solar Systems  </Link>
                     <Link href='/'>Solar water pumps </Link>
                     <Link href='/'>Control panels</Link>
                     <Link href='/'>Transformers</Link>
                     <Link href='/'>Generators</Link>
                   </div>
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <MdElectricalServices className={styles.menuIcon}/>
                     <Link href='/about'>Products</Link>
                     <RiArrowDropDownLine className={styles.dropDown} onClick={toggleProductsMenu}/>
                   </div>
                   <div className={productsMenu? styles.subMenu: styles.subMenuOff}>
                     <Link href='/'>Solar panels  </Link>
                     <Link href='/'>Solar water pump </Link>
                     <Link href='/'>Transformers</Link>
                     <Link href='/'>Generators</Link>
                   </div>
                </item>
                
                <item className={styles.item}>
                   <div className={styles.link}>
                     <IoIosMail className={styles.menuIcon}/>
                     <Link href='/about'>Contact</Link>
                   </div>
                </item>
               </div>
            </div>
       </nav>
      
        
    </>   
    )
}
export default Navbar
