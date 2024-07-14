'use client'
import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

interface ReviewsData {
    avatar: string
    name: string
    job: string
    review: string
}
const reviewsData: ReviewsData[] = [
    {
        avatar: "/reviews/avatar-1.png",
        name: "Wade Cooper",
        job: 'Cheif',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-2.png",
        name: "Arlene Mccoy",
        job: 'Designer',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: "Devon Lane",
        job: 'Manager',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: "Devon Lane",
        job: 'Manager',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-4.png",
        name: "Danial Korvin",
        job: 'CEO',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Rohan Roy",
        job: 'Director',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },
    {
        avatar: "/reviews/avatar-6.png",
        name: "Md Hasan",
        job: 'Chairman',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deserunt!"
    },

]

export default function Reviews() {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>
                    This say about our work
                </h2>

                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className='h-[350px]'
                >
                    {
                        reviewsData.map((person: ReviewsData, idx: number) => (
                            <SwiperSlide key={idx}>
                                <Card className='p-8 min-h-[300px] cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700' >
                                    <CardHeader className='p-0 mb-3'>
                                        <div className='flex flex-col items-start gap-x-4'>
                                            <Image
                                                src={person.avatar}
                                                alt={person.name}
                                                width={70}
                                                height={70}
                                                priority
                                                className='mb-2'
                                            />
                                        </div>

                                        {/* name */}
                                        <div className='flex flex-col'>
                                            <CardTitle>
                                                {person.name}
                                            </CardTitle>
                                            <p>{person.job}</p>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>

                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
