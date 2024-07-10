'use client'
import React from 'react'

// framar motion
import { motion } from 'framer-motion'

// Hooks
import useScrollProgress from '@/hooks/useScrollProgress'

// variants
const variants = {
  hidden: {opacity: 0},
  enter: {opacity: 1},
}

export default function tamplate({children}: {children: React.ReactNode}) {
  const progress = useScrollProgress()
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{type: "linear", delay: 0.2, duration: 0.4}}
      >
        {children}
      </motion.main>

      <span 
        style={{ transform: `translateY(${progress - 100}%)` }}
        className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0  transition-all duration-700'
      >
      </span>
      <div className='h-[3000px]'></div>
    </>
  )
}