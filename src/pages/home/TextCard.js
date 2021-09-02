import React from 'react'


const TextCard = ({icon, alt, amount, spanText, title}) => {
    
    return (
        <section className="text-white  w-full">

            <div className="lg:flex top-24  items-center  flex-row  absolute">
               <div className="flex items-center flex-row">
                   <h3 className="">{title}</h3>
                   <img className="h-14" src={icon} alt={alt} />
               </div>
               <div className="flex flex-row lg:space-x-3">
                   <h3>{amount}</h3>
                   <span>{spanText}</span>
               </div>
            </div>
        </section>
    )
}

export default TextCard
