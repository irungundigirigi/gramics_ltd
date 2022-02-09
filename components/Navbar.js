import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Navbar.module.css';
import Logo from '../public/icon.svg';
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
      <Head>

      <meta property="og:title" content="Get started with your solar journey." />
      <meta property="og:description" content="We are commited to providing customized Solar solutions to every client." />
      <meta property="og:image" content="https://gramics.co.ke/metaSolar.jpg" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Get started with your solar journey."/>
      <meta name="twitter:description" content="We are commited to providing customized Solar solutions and electrical installations to every client."/>
      <meta name="twitter:site" content="@gramics"/>
      <meta name="twitter:image" content="https://gramics.co.ke/metaSolar.jpg"/>
      <meta name="twitter:creator" content="@irungundigirigi"/>


      <meta name= "description" content="Gramics - Solar Solutions Electrical Installations" />
      <meta name= "keywords" content="Gramics,Gramics Power, solar, panels,water,pumping system, renewableenergy, energyKenya"/>
      <title>Gramics -Solar solutions | Electrical supplies and Installations |</title>
      <link rel="icon" sizes="32x32" href="icon.png" />
      </Head>

       <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                        <Image src={Logo} />
                </div>
                <span className={styles.logoLabel}></span>
            </div>

            <div className={styles.linksHolder }>
              <div className={styles.webItem}>
                  <Link  href='/'>
                      <span className={styles.Link}>HOME</span >
                  </Link>

                   <div className={styles.LinkWithSubmenu}>
                        <span className={styles.Link}>SOLUTIONS</span >
                        <div className={styles.webSubmenu}>
                           <Link href='/solutions/solarpanels'>Solar Systems  </Link>
                           <Link href='/solutions/solar-water-pumping-system'>Solar water pumps </Link>
                           <Link href='/solutions/solar-water-heating-system'>Solar Heating System </Link>
                           <Link href='/solutions/control-panels'>Control panels</Link>
                           <Link href='/solutions/transformers'>Transformers</Link>
                           <Link href='/solutions/generators'>Generators</Link>
                        </div>
                   </div>

                  
                   <Link href='/featured'>
                      <span className={styles.Link}>FEATURED</span >
                   </Link>

                   <Link href='/contact-us'>
                      <span className={styles.Link}>CONTACT US</span >
                   </Link>
               </div>
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
                     <BiNews className={styles.menuIcon}/>
                     <Link href='/featured'>Featured</Link>
                   </div>
                </item>

                <item className={styles.item}>
                   <div className={styles.link}>
                     <IoIosMail className={styles.menuIcon}/>
                     <Link href='/contact-us'>Contact</Link>
                   </div>
                </item>
                
               </div>
            </div>
       </nav>
      
        
    </>   
    )
}
export default Navbar
