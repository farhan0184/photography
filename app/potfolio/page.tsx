'use client'
import React from 'react'
import Project from '@/components/Project'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'

interface PortfolioProps {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  codepen: string;
}
const projectData: PortfolioProps[] = [
  {
    image: '/work/11.png',
    category: 'fashion',
    name: 'Fashion: Adam',
    description:
      'Shoot Date: 13/02/2021',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/4.png',
    category: 'products',
    name: 'Product: Watch',
    description:
      'Shoot Date: 14/01/2018',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/5.png',
    category: 'portraits',
    name: 'Portrait: Elsa Liv',
    description:
      'Shoot Date: 09/03/2024',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/2.png',
    category: 'products',
    name: 'Product: Cosmetics',
    description:
      'Shoot Date: 14/01/2018',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/1.png',
    category: 'portraits',
    name: 'Portrait: Lucy Aln',
    description:
      'Shoot Date: 16/07/2023',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/8.png',
    category: 'fashion',
    name: 'Fashion: Susee',
    description:
      'Shoot Date: 28/07/2024',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/3.png',
    category: 'portraits',
    name: 'Portrait: Macro Allian',
    description:
      'Shoot Date: 08/01/2024',
    link: '/',
    codepen: '/'
  },
  {
    image: '/work/9.png',
    category: 'portraits',
    name: 'Portrait: Mark Adam',
    description:
      'Shoot Date: 11/01/2017',
    link: '/',
    codepen: '/'
  }

]

const uniqueCategories: string[] = [
  'all projects',
  ...Array.from(new Set(projectData.map((item) => item.category)))
]

export default function Portfolio(): React.JSX.Element {
  const [categories, setCategories] = React.useState(uniqueCategories)
  const [category, setCategory] = React.useState('all projects')

  const filterProject = projectData.filter((project) =>{
    return category === 'all projects' ? project : project.category === category
  } 
  
  )
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Portfolio</h2>

        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category: string, idx: number) => (
                <TabsTrigger
                  key={idx}
                  value={category}
                  onClick={() => setCategory(category)}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              ))
            }
          </TabsList>

          {/* tab content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4'>
            {
              filterProject.map((project: PortfolioProps, idx: number) => (
                <TabsContent value={category} key={idx}>
                  <Project project={project} />
                </TabsContent>
              ))
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}
