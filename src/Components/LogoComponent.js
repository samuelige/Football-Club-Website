import React from 'react'
import CustomLink from './CustomLink'

const LogoComponent = ({src, alt}) => {
    return (
        <CustomLink path="/" >
            <img src={src} alt={alt} />
        </CustomLink>
    )
}

export default LogoComponent
