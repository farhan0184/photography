'use client'
import React from 'react'
import { Input } from './ui/input'
import { ArrowRightIcon, Building, MessageSquare, UserCheck, UserRoundCheck } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Fade } from 'react-awesome-reveal'

export default function Form() {
    return (
        <form action="" className='flex flex-col gap-y-4'>
            {/* first name */}
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className='relative flex items-center'>
                    <Input type='name' id='first-name' placeholder='First Name' />
                    <UserCheck className='absolute right-6' size={20} />
                </div>
            </Fade>
            {/* last name */}
            <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                <div className='relative flex items-center'>
                    <Input type='name' id='last-name' placeholder='Last Name' />
                    <UserRoundCheck className='absolute right-6' size={20} />
                </div>
            </Fade>
            {/* email */}
            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                <div className='relative flex items-center'>
                    <Input type='email' id='email' placeholder='Email' />
                    <Building className='absolute right-6' size={20} />
                </div>
            </Fade>
            {/* Message */}
            <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                <div className='relative flex items-center'>
                    <Textarea placeholder='Type Your Message Here...' />
                    <MessageSquare className='absolute top-4 right-6' size={20} />
                </div>
            </Fade>

            <Fade direction='up' delay={1200} cascade damping={1e-1} triggerOnce={true}>
                <Button className='flex items-center gap-x-1 max-w-[165px]'>
                    Let&apos;s Talk
                    <ArrowRightIcon size={20} />
                </Button>
            </Fade>


        </form>
    )
}
