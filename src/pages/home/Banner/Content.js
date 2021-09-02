import React from 'react'
import { BsClock } from "react-icons/bs";
import { IoCaretBack } from "react-icons/io5";

import banner_1 from '../../../Assets/banner_icons/banner_1.png'
import banner_2 from '../../../Assets/banner_icons/banner_2.png'
import banner_3 from '../../../Assets/banner_icons/banner_3.png'
import barcelona from '../../../Assets/banner_icons/barcelona.png'
import Cards from './Cards';

const Content = () => {
 const bannerData = [
        {
            image : banner_1, 
            title : 'BARCA TV+', 
            subTitle : 'Ten things about Luuk De Jong', 
            footertext_1 : 'TV',
            footerIcon : barcelona,
            arrowIcon : <IoCaretBack />,
            time : '03:39',
        },
        {
            image : banner_2, 
            subTitle : 'Ansu Fati to wear the number 10 shirt', 
            timeIcon : <BsClock className="text-sm"/>,
            time : '01 Sep 21',
        },
        {
            image : banner_3, 
            subTitle : 'Minute by minute of FC Barcelona players on international duty', 
            timeIcon : <BsClock className="text-sm"/>,
            time : '15 hrs ago',
            
        }
    ];
    return (
        <React.Fragment>
            {
                bannerData && bannerData.map(({image, title, subTitle, footertext_1, footerIcon, timeIcon, time, arrowIcon}, index) => (
                    <Cards id={index} image={image} title={title} subTitle={subTitle} footertext_1={footertext_1} arrowIcon={arrowIcon} footerIcon={footerIcon} timeIcon={timeIcon}  time={time} />
                ))
            }
        </React.Fragment>
    )
}

export default Content
