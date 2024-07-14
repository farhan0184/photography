import React from 'react'
import { GalleryProps } from './Gallery'
import { Card, CardHeader } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Group, Link2Icon } from 'lucide-react'

export default function Project({project}:{project:GalleryProps}) {
  return (
    <Card className='group overflow-hidden relative'>
        <CardHeader className='p-0'>
            {/* image */}
            <div className='relative w-full h-[290px] flex justify-center items-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat'>
                <Image
                 src={project.image}
                 width={440}
                 height={200}
                 alt=''
                 priority
                 className='absolute top-0 shadow-2xl hover:scale-110 transition-all'
                />
                <div className='flex gap-x-4'>
                  <Link 
                    href={project.link} 
                    className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-50 duration-200 transition-all'
                  >
                    <Link2Icon/>
                  </Link>
                  <Link 
                    href={project.link} 
                    className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-50 duration-200 transition-all'
                  >
                    <Group/>
                  </Link>
                </div>
            </div>
        </CardHeader>

        <div className='h-full px-8 py-6'>
          <Badge className='absolute top-4 left-5 uppercase text-sm font-medium mb-2'>
            {project.category}
          </Badge>
          <h4 className='h4 mb-1'>{project.name}</h4>
          <p className='text-muted-foreground text-lg'>{project.description}</p>
        </div>

    </Card>
  )
}
