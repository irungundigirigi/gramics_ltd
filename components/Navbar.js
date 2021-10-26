import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Navbar.module.css';
import Logo from '../public/icon.png';
import { FaBars, FaSolarPanel, FaToggleOff }  from 'react-icons/fa';
import {MdElectricalServices, } from 'react-icons/md'
import {GiElectric} from 'react-icons/gi'
import { AiOutlineClose,AiFillHome  } from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {IoIosMail} from 'react-icons/io'
import {BiNews} from 'react-icons/bi'





const Navbar = () => {
    const[inProps, setInProps] = useState(false)
    const[serviceMenu, setServiceMenu] = useState(false)
    const[productsMenu, setProductsMenu] = useState(false)
    
  

    const menuClicked = () => {
       setInProps(!inProps)
       
    }
    const toggleServiceMenu = () => {
       setServiceMenu(!serviceMenu)
       setProductsMenu(false)
    }
    const toggleProductsMenu = () => {
      setProductsMenu(!productsMenu)
      setServiceMenu(false)
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
                     <FaSolarPanel className={styles.menuIcon}/>
                     <div>Solutions</div>
                     <RiArrowDropDownLine className={styles.dropDown} onClick={toggleServiceMenu}/>
                   </div>
                   <div className={serviceMenu? styles.subMenu: styles.subMenuOff}>
                     <Link href='/solutions/solarpanels'>Solar Systems  </Link>
                     <Link href='/solutions/solar-water-pumping-system'>Solar water pumps </Link>
                     <Link href='/solutions/solar-water-heating-system'>Solar Heating System </Link>
                     <Link href='/solutions/control-panels'>Control panels</Link>
                     <Link href='/solutions/transformers'>Transformers</Link>
                     <Link href='/solutions/generators'>Generators</Link>
                   </div>
                </item>
                
                <item className={styles.item}>
                   <div className={styles.link}>
                     <GiElectric className={styles.menuIcon}/>
                     <Link href='/about'>Projects</Link>
                   </div>
                </item>
                <item className={styles.item}>
                   <div className={styles.link}>
                     <BiNews className={styles.menuIcon}/>
                     <Link href='/about'>Read</Link>
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
