import HeroImg from '@/components/HeroImg'
import React from 'react'
import { RiRidingFill, RiSendPlaneFill, RiStarHalfFill, RiUserHeartFill, RiVidiconFill } from 'react-icons/ri'

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: 'Mrs Smith'
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: '+123 456 789'
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: 'photography@gmail.com'
  },
  {
    icon: <RiStarHalfFill size={20} />,
    text: 'Master Degree'
  },
  {
    icon: <RiRidingFill size={20} />,
    text: '22, Eila Statu, Texas, USA'
  },

]

export default function About(): React.JSX.Element {
  return (
    <section className='pb-12 min-h-screen xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>

        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='relative flex-1 xl:flex'>
            <HeroImg
              containerStyle='lg:w-[505px] w-[450px] lg:h-[505px] h-[450px] bg-no-repeat relative mx-auto xl:mx-0'
              imgSrc='/about/profile.png'
            />
          </div>

          <div className='flex-1'>
            {/* content */}
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='text-center xl:text-left'>
                <h3 className='h3 mb-4'>Let&apos;s plan your perfect photoshoot</h3>
                <p className='subtitle max-w-xl mx-auto xl:mx-0'>Our mission is to further develop the overall excellence of photography and to capture memories that will be cherished for a lifetime, in the timeless photographs.</p>
                <p className='subtitle max-w-xl mx-auto xl:mx-0'>Professional photography services combine the classic knowledge of traditional photographic portraiture and contemporary style.</p>

                {/* icons */}
                <div className='grid mx-auto xl:grid-cols-2 gap-4 mt-12'>
                  {
                    infoData.map((info, idx) => (
                      <div key={idx} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                        <div className='text-primary'>{info.icon}</div>
                         <div className=''>{info.text}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
