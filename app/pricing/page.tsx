'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"
import { CheckIcon } from 'lucide-react'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const includedFeature = [
  'Private forum access',
  "Member Resources",
  "Entry to annual conference",
  "Official member equipment"
]

export default function Pricing(): React.JSX.Element {
  const { toast } = useToast()
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My price</h2>
        </Fade>

        <div className='mx-auto max-w-2xl sm:text-center'>
          <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Memories Worth love cherishing</h2>
          </Fade>
          <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
            <p className='mt-6 text-lg leading-8'>Create the memories & celebrate the magic with Solene a beautifully designed wedding photography theme that has it all.</p>
          </Fade>
        </div>

        {/* pricing */}
        <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
          <div className='mx-auto my-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            {/* left section */}
            <div className='p-8 sm:p-10 lg:flex-auto'>

              <h3 className='text-2xl font-bold tracking-tight'>Lifetime Membership</h3>
              <p className='mt-6 text-base leading-7'>Create the memories & celebrate the magic with Solene a beautifully designed wedding photography theme that has it all.</p>

              <div className='mt-10 flex item-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-primary'>
                  What&apos;s included
                </h4>
                <div className='h-px flex-auto bg-gray-100'></div>
              </div>
              <ul
                role='list'
                className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
              >
                {
                  includedFeature.map((feature: string, idx: number) => (
                    <li key={idx} className='flex text-muted-foreground gap-x-3'>
                      <CheckIcon className='h-6 w-6 text-primary flex-none' aria-hidden='true' />
                      {feature}
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* right section */}
            <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='bg-tertiary py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
                <div className='mx-auto max-w-xs px-8'>
                  <p className='text-base font-semibold'>Pay once, own it forever</p>
                  <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                    <span className='text-5xl font-bold tracking-tight'>$199</span>
                    <span className='text-sm font-semibold leading-6 tracking-wide'>USD</span>
                  </p>
                  <Button className='gap-x-2 mt-3'
                    onClick={() => {
                      toast({
                        title: "Scheduled: Catch up",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: <ToastAction altText='close'>close</ToastAction>,
                      })
                    }}
                  >
                    Purchase
                  </Button>

                  <p className='mt-6 text-xs leading-5'>
                    Invoices and recipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>


    </section>
  )
}
