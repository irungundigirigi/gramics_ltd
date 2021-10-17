import React from 'react';
import Navbar from '../components/Navbar'
import Footer from './footer.js'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            
        </>
    )
}

export default Layout
