import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const NavLinkData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Products & Services',
        path: '/services',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {
        title: 'Contact us',
        path: '/contact',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    }
]