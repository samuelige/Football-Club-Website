import React from 'react'
import Footer from '../Components/Header_Footer/Footer/Footer'
import Header from '../Components/Header_Footer/Header'

const Layout = ({children}) => {
    return (
        <main >
            <Header />
            {children}
            <Footer/>
        </main>
    )
}

export default Layout
