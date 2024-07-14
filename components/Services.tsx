import { Bird, Scan, Smile } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface ServicesDataProps {
    icon: React.ReactNode,
    title: string,
    description: string
}

const servicesData: ServicesDataProps[] =[
    {
        icon: <Smile size={48} strokeWidth={1}/>,
        title: 'Portraiture',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
    },
    {
        icon: <Scan size={48} strokeWidth={1}/>,
        title: 'Landscapes',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
    },
    {
        icon: <Bird size={48} strokeWidth={1}/>,
        title: 'Lifes',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
    },

]

export default function Services() {
  return (
    <section className='mb-12 xl:mb-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-6 xl:mb-24 text-center mx-auto'>Our Services</h2>

            {/* category */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {
                    servicesData.map((service, idx) => (
                        <Card key={idx} className='relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700'>
                            <CardHeader className='w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6'>
                                {service.icon}
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4 '>{service.title}</CardTitle>
                                <CardDescription className='text-lg'>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
