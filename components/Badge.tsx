'use client'
import React from 'react'
import CountUp from 'react-countup'

export interface BadgeProps {
    containerStyle?: string
    icon: React.ReactNode
    endCountNum: number
    endCountText: string
    badgeText?: string
}

export default function Badge({
    containerStyle,
    icon,
    endCountNum,
    endCountText,
    badgeText
}: BadgeProps) {
  return (
    <div className={`badge ${containerStyle}`}>
        <div className="text-3xl text-white">
            {icon}
        </div>
        <div className='flex items-center gap-x-2'>
            <div className='text-4xl leading-none font-bold text-white'>
                <CountUp end={endCountNum} duration={4} delay={1}/>
                {endCountText}
            </div>
            <div className='max-w-[70px] text-[15px] leading-none font-medium text-black'>{badgeText}</div>
        </div>
    </div>
  )
}
