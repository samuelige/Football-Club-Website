import React from 'react'
import LogoComponent from '../../LogoComponent'
import logo from '../../../Assets/logo.png'

const Footer = () => {
    return (
        <div className="items-center m-auto h-32  lg:h-52 m space-y-1 bg-footerBg">

            <div className="flex pt-14 flex-row justify-center ">
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
