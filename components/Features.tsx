import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import React from 'react'
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
        <section className='pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-2 xl:mb-3 text-center mx-auto'>Key Features</h2>

                <div className='flex flex-col'>
                    <div className='mx-auto max-w-7xl text-center'>
                        <p className='mt-2 text-3xl font-bold tracking-tight text-black data:text-white'>Everything you need to deliver faster.</p>
                        <p className='mt-6 text-lg leading-8 text-black dark:text-white'>
                            It&apos;s wide array of extremely useful & user-friendly elements and features turn websites creation into a cakewalk. Get started now & see just how easy it is to make the website you always wanted.
                        </p>
                    </div>
                </div>

                {/* Features Sections */}
                <div>
                    <dl>
                        {
                            features.map((feature: FeaturesProps, idx: number) => (
                                <div key={idx}>
                                    <dt>
                                        <div>
                                            <feature.icon className="h-[36px] w-[36px]" aria-hidden="true" />
                                        </div>
                                        <div>
                                            {feature.name}
                                        </div>
                                    </dt>
                                    <dd>
                                        {feature.description}
                                    </dd>
                                </div>
                            ))
                        }
                    </dl>
                </div>
            </div>
        </section>
    )
}
