import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div className = {styles.footer}>
            <div className={styles.footerAdress}>Gramic's Power Systems Limited.
                P.o box 226 - 00300 Nairobi. <br />
                Phone; 0724647209,0737898643. <br />
                Email; gramicspowersystems@gmail.com. <br />
                Website: www.gramicspowersystems.com.<br />
            </div>
            
        </div>
    )
}

export default Footer
