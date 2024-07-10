import Link from 'next/link'
import React from 'react'
import {RiPaypalFill, RiSnapchatFill, RiSkypeFill, RiFacebookFill, RiInstagramFill} from 'react-icons/ri'

// data props
interface IconProps {
    icon: React.ReactNode
    path: string
}
//  socials props
interface SocialsProps {
    containerStyles?: string
    iconStyles?: string
}

// data
const icons: IconProps[] = [
    {
        icon: <RiPaypalFill/>,
        path: "https://www.paypal.com"
    },
    {
        icon: <RiSnapchatFill/>,
        path: "https://www.snapchat.com"
    },
    {
        icon: <RiSkypeFill/>,
        path: "https://www.skype.com"
    },
    {
        icon: <RiFacebookFill/>,
        path: "https://www.facebook.com"
    },
    {
        icon: <RiInstagramFill/>,
        path: "https://www.instagram.com"
    }
]
export default function Socials({ containerStyles, iconStyles }: SocialsProps):React.JSX.Element {
  return (
    <div className={`${containerStyles}`}>
        {
            icons.map((icon, idx) => {
                return (
                    <Link
                        key={idx}
                        href={icon.path}
                    >
                        <div className={`${iconStyles}`}>
                            {icon.icon}
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}
