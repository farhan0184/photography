import React from 'react'
import Project from './Project'

export interface GalleryProps {
    image: string
    category: string
    name: string
    description: string
    link: string
    codepen: string
}
const GalleryData: GalleryProps[] = [
    {
        image: '/work/3.png',
        category: "Portaits",
        name: "Feb 11, 2024",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/5.png',
        category: "Models",
        name: "April 22, 2023",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/6.png',
        category: "Places",
        name: "Nov 07, 2023",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/7.png',
        category: "Corporate",
        name: "Jan 14, 2023",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/8.png',
        category: "Fashion",
        name: "Jan 31, 2023",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/9.png',
        category: "Fashion",
        name: "Aug 15, 2024",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/10.png',
        category: "Corporate",
        name: "Mar 11, 2023",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },
    {
        image: '/work/11.png',
        category: "Models",
        name: "Oct 31, 2024",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus.',
        link: "/",
        codepen: '/'
    },

]

export default function Gallery() {
    return (
        <section className='relative mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-6 xl:mb-16 text-center mx-auto'>My Gallery</h2>


                {/* gallery */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        GalleryData.map((project: GalleryProps, idx: number) => (
                            <Project key={idx} project={project} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
