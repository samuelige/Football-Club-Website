import React from 'react'
import LogoComponent from '../../LogoComponent'
import logo from '../../../Assets/logo.png'

const Footer = () => {
    return (
        <div className="fixed w-full bottom-0 h-32  lg:h-28 space-y-1 bg-footerBg">

            <div className="flex pt-6 flex-row justify-center ">
                <LogoComponent 
                    path='/'
                    src={logo}
                    alt='Footer Logo Icon'
                />
            </div>

            <p className="text-center text-white">
                &copy; Copyright FC Barcelona Official website of FC Barcelona
            </p>
            
        </div>
    )
}

export default Footer
