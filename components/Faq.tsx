'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Fade } from 'react-awesome-reveal'

export default function Faq() {
    return (
        <section className=''>
            <div className='container mx-auto'>
                <div className='w-full pt-12 mb-6 xl:mb-24'>
                    <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='section-title mb-12 text-center mx-auto'>
                            Our Studio
                        </h2>
                    </Fade>
                    {/* accordion */}
                    <div>
                    <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>
                                    <div className='ms-3'>
                                        01. What kind of photography equipment do you need?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>
                                    <div className='ms-3'>
                                        01. Do I have to came to your studio to view my photos?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger>
                                    <div className='ms-3'>
                                        01. How long have you been in business?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
