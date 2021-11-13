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
                <div className={styles.contactCard}>
                    <div className={styles.header}>
                        Location
                    </div>
                    <span className={styles.content}> Aquidental House, Westlands, Nairobi</span>

                    <div className={styles.header}>
                        Email
                    </div>
                    <span className={styles.content}> Office@gramics.co.ke</span>

                    <div className={styles.header}>
                        Phone
                    </div>
                    <span className={styles.content}> 0724 647 209</span>
                </div>
            </div>
            <div >
            </div>
        </div>
    )
}

export default Contact
