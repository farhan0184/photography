import React from 'react'
import Socials from './Socials'

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* social */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconStyles='text-white text-[20px] transition-all 
             hover:text-white dark:hover:text-white/50'
          />
          <div className='text-white'>
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
