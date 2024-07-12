import Image from 'next/image'
import React from 'react'

interface HeroImgProps {
    containerStyle: string
    imgSrc: string
}

export default function HeroImg({containerStyle, imgSrc}: HeroImgProps): React.JSX.Element {
  return (
    <div className={`${containerStyle}`}>
        <Image 
            src={imgSrc} fill priority
            alt=''
        />
    </div>
  )
}
