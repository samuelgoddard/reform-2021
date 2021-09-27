import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function PageNotFound() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="404: Page Not Found" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <div className="h-screen flex flex-wrap flex-col">
                <m.section
                  initial="initial"
                  className="flex-1 bg-offwhitelight"
                  animate="enter"
                  exit="exit"
                >
                  <m.div variants={fade} className="flex flex-wrap pt-16 md:pt-16 xl:pt-20 pr-5 md:pr-8 relative h-full items-end justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10/12 xl:w-8/12 mb-12" viewBox="0 0 947.204 383.213">
                      <g id="Group_111" data-name="Group 111" transform="translate(-634.912 -504.738)">
                        <path id="Path_8" data-name="Path 8" d="M337.069.029a98.779,98.779,0,0,1,41.756,8.077,75.032,75.032,0,0,1,28.591,22.453,101.2,101.2,0,0,1,16.8,34.084,154.589,154.589,0,0,1,5.573,42.726,228.5,228.5,0,0,1-8.642,59.929,326.547,326.547,0,0,1-24.23,62.19,369.188,369.188,0,0,1-37.153,58.475,297.87,297.87,0,0,1-47.41,49.106,224.934,224.934,0,0,1-55.245,33.6,153.456,153.456,0,0,1-60.494,12.519,100.314,100.314,0,0,1-41.6-8.077,74.306,74.306,0,0,1-28.915-22.453,101.2,101.2,0,0,1-16.638-33.841,158.138,158.138,0,0,1-5.492-42.726,228.251,228.251,0,0,1,8.319-60.171,326.544,326.544,0,0,1,24.23-62.19,375.728,375.728,0,0,1,37.153-58.556,301.5,301.5,0,0,1,47.491-49.106,228.168,228.168,0,0,1,55.164-33.518A153.457,153.457,0,0,1,337.069.029ZM377.452,93.8a148.2,148.2,0,0,0-3.069-30.53,71.961,71.961,0,0,0-10.257-25.2,50.48,50.48,0,0,0-19.707-17.2,68.329,68.329,0,0,0-31.338-6.381,77.213,77.213,0,0,0-45.795,15.265,168.236,168.236,0,0,0-38.849,39.656,319.68,319.68,0,0,0-31.1,54.679,496.722,496.722,0,0,0-22.7,60.414,486.761,486.761,0,0,0-13.892,57.183,265.972,265.972,0,0,0-4.765,44.1,148.2,148.2,0,0,0,3.069,30.53,75.354,75.354,0,0,0,10.015,25.28,49.511,49.511,0,0,0,19.142,17.2,65.259,65.259,0,0,0,30.53,6.381,79.394,79.394,0,0,0,47.006-15.265,165.975,165.975,0,0,0,39.091-39.656,312.154,312.154,0,0,0,31.1-54.679,544.561,544.561,0,0,0,23.019-60.494A456.178,456.178,0,0,0,373.091,137.9a265.984,265.984,0,0,0,4.523-44.1Z" transform="translate(851.777 504.742)" fill="#333"/>
                        <path id="Path_16" data-name="Path 16" d="M258.24-173.236V-376.6H202.288L12.912-176.464v39.274h201.75L214.124,0H258.24V-137.19h54.876v-36.046Zm-43.04,0H59.18L225.422-352.928Z" transform="translate(622 885)" fill="#333"/>
                        <path id="Path_17" data-name="Path 17" d="M258.24-173.236V-376.6H202.288L12.912-176.464v39.274h201.75L214.124,0H258.24V-137.19h54.876v-36.046Zm-43.04,0H59.18L225.422-352.928Z" transform="translate(1269 885)" fill="#333"/>
                      </g>
                    </svg>

                    <h1 className="absolute top-0 left-0 text-lg md:text-xl mt-16 md:mt-20 xl:mt-24 ml-4 xl:ml-8 max-w-xs leading-tighter pt-2 xl:pt-4">
                      Sorry that page does not exist, please navigate back to our <Link href="/"><a className="underline">home page here.</a></Link>
                    </h1>
                  </m.div>
                </m.section>

                <m.section
                  initial="initial"
                  className="bg-offwhitelight"
                  animate="enter"
                  exit="exit"
                >
                  <div>
                    <m.div variants={fade} className="-mt-5 relative z-50">
                      <Footer hideCta color="white" />
                    </m.div>
                  </div>
                </m.section>
              </div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}