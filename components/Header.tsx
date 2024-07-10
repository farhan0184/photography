'use client'
import React from 'react'
import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const [header, setHeader] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const scrollYPos:any = window.addEventListener('scroll', () => {
       if(window.scrollY > 50) 
        { setHeader(true)} 
       else { setHeader(false)}
    })

    return () => window.removeEventListener('scroll', scrollYPos)
  })
  return (
    <header
    className={`${header
      ? 'py-4 bg-white shadow-lg dark:bg-accent'
      : 'py-6 dark:bg-transparent'} sticky top-0 z-50 transition-all ${pathname === '/' && 'bg-[#fff]'}`}
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Logo />

          <div className='flex items-center gap-x-6'>
            {/* nav bar */}
            <Nav 
              contaierStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              ubnderlineStyles='absolute top-full left-0 h-[2px] bg-primary w-full'
            />

            {/* theme toggler */}
            <ThemeToggler />

            {/* mobile nav */}
            <div className='xl:hidden'>
              <MobileNav/>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
