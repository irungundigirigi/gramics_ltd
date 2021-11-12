import React from 'react';
import styles from '../styles/contact.module.css';
import Image from 'next/image';
import contact from '../public/contact_us.png'

function Contact() {
    return (
        <div className={styles.container}>
            <div>
                <Image src={contact}/>
            </div>
            <div className={styles.contacts}>
                <div className={styles.contactCard}></div>
                <div className={styles.contactCard}></div>
                <div className={styles.contactCard}></div>

            </div>
            <div >
            </div>
        </div>
    )
}

export default Contact
