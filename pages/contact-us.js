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
                    <p className={styles.content}> Aquidental House, Westlands, Nairobi</p>

                    <div className={styles.header}>
                        Email
                    </div>
                    <p className={styles.content}> Office@gramics.co.ke</p>

                    <div className={styles.header}>
                        Phone
                    </div>
                    <p className={styles.content}> 0724 647 209</p>
                </div>
               

            </div>
            <div >
            </div>
        </div>
    )
}

export default Contact
