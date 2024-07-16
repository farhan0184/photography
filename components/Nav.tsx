'use client'
import Link from "next/link";
import React from "react";

// Next Hooks
import { usePathname } from "next/navigation";

// Framer Motion
import { motion } from "framer-motion";

// types 
interface NavProps {
    contaierStyles?: string
    linkStyles?: string
    ubnderlineStyles?: string
}
interface LinkProps {
    path: string
    name: string
}

// data
const links: LinkProps[] = [
    {path: "/", name: "Home"},
    {path: "/about", name: "About"},
    {path: "/projects", name: "Projects"},
    {path: "/pricing", name: "Pricing"},
    {path: "/contact", name: "Contact"},
] 

const Nav = ({contaierStyles, linkStyles, ubnderlineStyles}: NavProps) => {

    const pathname = usePathname();
    return (
        <nav className={contaierStyles}>
            {links.map((link, idx) => (
                <Link 
                    href={link.path}
                    key={idx}
                    className={`${linkStyles} `}
                >
                {pathname === link.path && (
                    <motion.span 
                        initial={{y: '-100%'}}
                        animate={{y: 0}}
                        transition={{type:'tween'}}
                        layoutId="underline"
                        className={`${ubnderlineStyles}`}
                    />
                )}
                {link.name}
                </Link>
            ))}
        </nav>
    )
}
export default Nav