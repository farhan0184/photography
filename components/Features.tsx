'use client'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
interface FeaturesProps {
    name: string,
    description: string,
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
}

const features: FeaturesProps[] = [
    {
        name: 'PHOTOGRAPHY',
        description: 'Studio comes with elements mode specifically for photographers, incliding the client list, password protected pages, and the proofing gallery.',
        icon: CloudArrowUpIcon,
    },
    {
        name: "PORTFOLIO LISTS",
        description: `Use our protfolio lists to create galleries of your workm It's easy, intutive, and most important of all, your workis sure to command attention`,
        icon: LockClosedIcon,
    },
    {
        name: "FULLY CUSTOMIZABLE",
        description: `It is a fully flexible theme, all elements, page and evety other aspect of your website can be effortlessly adupted to fit yout specific needs`,
        icon: ArrowPathIcon,
    },
    {
        name: "FREE PLUGINS",
        description: `Two amazing plugins are included for free with Azalea: the Revolution Slider plugin & the intuitive drag-and-drop visual Composer page builder`,
        icon: FingerPrintIcon,
    }
]

export default function Features(): React.JSX.Element {
    return (
        <section className='pb-12 xl:pb-24'>
            <div className='container mx-auto'>
                <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className='section-title mb-2 xl:mb-3 text-center mx-auto'>Key Features</h2>
                </Fade>

                <div className='flex flex-col'>
                    <div className='mx-auto max-w-7xl text-center'>
                        <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                            <p className='mt-2 text-3xl font-bold tracking-tight text-black dark:text-white'>Everything you need to deliver faster.</p>
                        </Fade>
                        <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='my-6 text-lg leading-8 text-black dark:text-white'>
                                It&apos;s wide array of extremely useful & user-friendly elements and features turn websites creation into a cakewalk. Get started now & see just how easy it is to make the website you always wanted.
                            </p>
                        </Fade>
                    </div>
                </div>

                {/* Features Sections */}
                <div className='mx-auto mtt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
                    <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                        <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            {features.map((feature: FeaturesProps, idx: number) => (
                                <div key={idx} className='relative hover:scale-110 transition-all'>
                                    <dt className='text-base leading-7 font-semibold text-muted-foreground justify-center'>
                                        <div className='flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center'>
                                            <feature.icon className="h-[36px] w-[36px] text-white" aria-hidden="true" />
                                        </div>
                                        <div className='text-black dark:text-white'>
                                            {feature.name}
                                        </div>
                                    </dt>
                                    <dd className='mt-2 text-base leading-7'>
                                        {feature.description}
                                    </dd>
                                </div>
                            ))
                            }
                        </Fade>
                    </dl>
                </div>
            </div>
        </section>
    )
}
