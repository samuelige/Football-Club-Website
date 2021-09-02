import React from 'react'

const Cards = ({image, title, subTitle, footertext_1, arrowIcon, footerIcon, timeIcon, time, id}) => {
    return (
        <div className="h-72 w-full bg-blend-overlay relative trigger cursor-pointer  cursor-pointer transition duration-150 transform hover:scale-110" key={id}>
            <img loading="lazy" alt="card icon"
                class="w-full h-full absolute inset-0 object-cover object-center"
                src={image}
            />

            <div
                className=" h-full controls transition duration-150 ease-in-out text-white w-full bg-transparentBlue  bg-blend-soft-light py-4 px-3 absolute top-0 left-0 right-0 shadow">
                <div className= {timeIcon ? "mt-28 lg:mt-44 text-center" : "mt-28 lg:mt-36 text-center" }>

                    {
                        title ? <h3 class=" font-bold text-ligYellow text-2xl">{title}</h3> : null
                    }

                    <h3 class=" text-lg font-semibold">{subTitle}</h3>

                    {
                        title ? (
                            <div className="w-full flex flex-wrap sm:flex-nowrap justify-items-center justify-center space-x-3">
                                <div className="flex justify-center justify-items-center">
                                    <img alt="card-footer-icon" className="w-4" src={footerIcon}/>
                                    <small>{footertext_1}</small>
                                </div>
                                <div className="flex justify-items-center justify-center">
                                    {arrowIcon}
                                    <small>{time}</small>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex justify-center justify-items-center">
                                {timeIcon}
                                <small>{time}</small>
                                
                            </div>
                        )

                        
                    }

                </div>
                
                
            </div>
        
        </div>
    )
}

export default Cards
