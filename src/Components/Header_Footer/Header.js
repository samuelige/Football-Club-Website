import React, { useState } from 'react'
import Sticky from 'react-stickynode';
import LogoComponent from '../LogoComponent';
import logo from "../../Assets/logo.png";
import menuItems from './header_data';
import { HiDotsHorizontal } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import CustomLink from '../CustomLink';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [menu, setMenu] = useState(false);

    const handleStateChange = (status) => {
      if (status.status === Sticky.STATUS_FIXED) {
        setIsSticky(true);
      } else if (status.status === Sticky.STATUS_ORIGINAL) {
        setIsSticky(false);
      }
    };

    return (
        <div className="w-full">
            <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
                <header className={`${isSticky ? 'sticky bg-FcYellow h-16 text-white' : 'unSticky bg-DarkWine h-16 md:h-20'}`}>
                    <div className='hidden lg:container lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-14 lg:py-6'>
                        <div className='cursor-pointer '>
                            <LogoComponent
                                path='/'
                                src={logo}
                                alt='Header Logo Icon'
                            />
                        </div>

                        <nav className='space-x-4 text-white'>
                            {
                                menuItems?.map(({path, label}, i) => (
                                    <CustomLink path={path} key={i}>
                                        {label}
                                    </CustomLink>
                                ))
                            }
                        </nav>
                    </div>

                    <div className=" p-3 items-center w-full container md:px-10 md:py-12  lg:hidden">
                        <div className='float-left cursor-pointer'>
                            <LogoComponent
                                path='/'
                                src={logo}
                                alt='Header Logo Icon'
                            />
                        </div>

                        <div className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-24" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                            <nav className='flex flex-col space-y-2 mb-4 '>
                                {
                                    menuItems?.map(({path, label}, i) => (
                                        <CustomLink path={path} key={i}>
                                            {label}
                                        </CustomLink>
                                    ))
                                }
                            </nav>
                        </div>

                        <div className="float-right  xl:hidden">
                            {!menu ? (
                                <HiDotsHorizontal className="h-5 text-white" id="open" onClick={() => setMenu(true)} />
                            ) : (
                                <HiOutlineX className="h-5 text-white" id="close" onClick={() => setMenu(false)}/>
                            )}
                        </div>
                    </div>
        
                </header>
            </Sticky>
        </div>
    )
}

export default Header
