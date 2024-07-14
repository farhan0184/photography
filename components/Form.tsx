'use client'
import React from 'react'
import { Input } from './ui/input'
import { ArrowRightIcon, Building, MessageSquare, UserCheck, UserRoundCheck } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export default function Form() {
  return (
    <form action="" className='flex flex-col gap-y-4'>
        {/* first name */}
        <div className='relative flex items-center'>
            <Input type='name' id='first-name' placeholder='First Name'/>
            <UserCheck className='absolute right-6' size={20}/>
        </div>
        {/* last name */}
        <div className='relative flex items-center'>
            <Input type='name' id='last-name' placeholder='Last Name'/>
            <UserRoundCheck className='absolute right-6' size={20}/>
        </div>
        {/* email */}
        <div className='relative flex items-center'>
            <Input type='email' id='email' placeholder='Email'/>
            <Building className='absolute right-6' size={20}/>
        </div>
        {/* Message */}
        <div className='relative flex items-center'>
            <Textarea placeholder='Type Your Message Here...'/>
            <MessageSquare className='absolute top-4 right-6' size={20}/>
        </div>
        

        <Button className='flex items-center gap-x-1 max-w-[165px]'>
            Let&apos;s Talk
            <ArrowRightIcon size={20}/>
        </Button>

        
    </form>
  )
}
