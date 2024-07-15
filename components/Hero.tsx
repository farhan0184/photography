'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { RiBodyScanFill, RiBookmark3Fill, RiMenFill, RiServerFill } from 'react-icons/ri'
import Socials from './Socials'
import HeroImg from './HeroImg'
import Badge, { BadgeProps } from './Badge'

// react awosome reveal animation
import { Fade } from 'react-awesome-reveal'

interface BadgeAllProps extends BadgeProps {
    title: string,
}

const badgeData: BadgeAllProps[] = [
    {
        title: 'Years Of Exprience',
        icon: <RiBookmark3Fill />,
        endCountNum: 12,
        endCountText: '+',
        badgeText: '',
        containerStyle: ''
    },
    {
        title: 'Followers',
        icon: <RiBodyScanFill />,
        endCountNum: 967,
        endCountText: 'k',
        badgeText: '',
        containerStyle: ''
    },
    {
        title: 'Projects',
        icon: <RiServerFill />,
        endCountNum: 79,
        endCountText: '+',
        badgeText: '',
        containerStyle: ''
    }
]

export default function Hero(): React.JSX.Element {
    return (
        <section className='py-12 xl:py-24 h-[auto] bg-bottom'>
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* left side content */}
                    <div className='flex max-w-[800px]  flex-col justify-center m-auto xl:mx-0 text-center xl:text-left'>
                        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                                Photography
                            </div>
                        </Fade>

                        <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className='h1 uppercase'>Let&apos;s make magic !</h1>
                        </Fade>

                        <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='subtitle max-w-[590px] mt-4 mx-auto xl:mx-0'>We are fine art, nature & portrait film photographers from San Francisco, with a special love for natural light, medium format film cameras & redheads with freckles.</p>
                        </Fade>

                        {/* subscribe button */}
                        <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='flex flex-col gap-y-3 mdflex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                                <div className='w-full flex gap-x-4'>
                                    <label htmlFor="email-address" className='sr-only'>Email Address</label>
                                    <Input id="email" type="email" placeholder="Email" />
                                    <Link href={"/contact"}><Button className='flex gap-x-2 bg-black'>
                                        Subscribe <RiMenFill size={18} />
                                    </Button></Link>
                                </div>

                            </div>
                        </Fade>
                        {/* social icons */}
                        <Fade direction='up' delay={1200} cascade damping={1e-1} triggerOnce={true}>
                            <Socials
                                containerStyles='flex gap-x-6 mx-auto xl:mx-0 '
                                iconStyles="text-forground text-[22px] hover:text-primary transition-all"
                            />
                        </Fade>
                    </div>

                    {/*  banner image */}
                    <Fade direction='left' className='scrollx' delay={600} cascade damping={0.1} triggerOnce={true}>
                        <div className='hidden xl:flex relative'>
                            <HeroImg containerStyle='w-[550px] h-[475px] bg-no-repeat relative bg-bottom' imgSrc="/about/photography.svg" />
                        </div>
                    </Fade>

                </div>
            </div>
            {/* badge */}
            <div className='py-24 sm:py-32'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                        {/* badge 1 */}
                        <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                            {badgeData.map((badge: BadgeAllProps, index: number) => (
                                <div key={index} className='mx-auto flex max-w-xs flex-col gap-y-4'>
                                    <dt className='text-base leading-7 text-muted-foreground'>{badge.title}</dt>
                                    <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                                        <Badge
                                            icon={badge.icon}
                                            endCountNum={badge.endCountNum}
                                            endCountText={badge.endCountText}
                                        // badgeText={badge.badgeText}
                                        // containerStyle={badge.containerStyle}
                                        />
                                    </dd>
                                </div>
                            ))}
                        </Fade>
                    </dl>
                </div>
            </div>
        </section>
    )
}
