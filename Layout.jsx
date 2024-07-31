import React from 'react'
import Header from './src/components/Header/Header'
import { Outlet } from 'react-router-dom';
import Footer from './src/components/Footer/Footer';
const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Layout