import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import Socials from './Socials'
import { AlignJustify } from 'lucide-react'

export default function MobileNav(): React.JSX.Element {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify
          className='cursor-pointer'
        />
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between items-center h-full'>
        <div className='flex flex-col items-center gap-y-32'>
          <Logo />
          <Nav 
          contaierStyles='flex flex-col gap-y-6 items-center'
          linkStyles='text-xl'
          />
        </div>

        {/* socials */}
        <Socials 
         containerStyles = 'flex gap-x-4 items-center'
         iconStyles = "text-2xl"
        />
      </SheetContent>
    </Sheet>
  )
}
