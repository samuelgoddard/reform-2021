import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NumberShape from '@/components/numberShape'
import { useRef, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const query = `*[_type == "expertises" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  title,
  heroText,
  introText,
  heroImage {
    asset ->
  },
  processImage {
    asset ->
  },
  supportingImage {
    asset ->
  },
  process[] {
    title,
    description,
    supportingImage {
      asset ->
    },
  },
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function Expertises(initialData) {
  const { data: { seo, title, slug, heroImage, supportingImage, heroText, introText, process }} = pageService.getPreviewHook(initialData)() 
  const containerRef = useRef(null)
  const [currentImage, setCurrentImage] = useState(0);
  const [currentHoveredImage, setCurrentHoveredImage] = useState(0);
  const [imageLock, setImageLock] = useState(false);
  

  return (
    <Layout>
      <NextSeo title={title} />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>

            <LazyMotion features={domAnimation}>
              <m.section
                initial="initial"
                className=""
                animate="enter"
                exit="exit"
              >
                <div className="grid md:grid-cols-2 pt-12 md:pt-14 xl:pt-14 border-b border-black">
                  <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>
                  
                  <m.div variants={fade} className="md:col-span-1 md:h-screen relative overflow-hidden bg-offwhite md:border-r md:border-black" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
                    { heroImage && (
                      <img src={heroImage.asset.url} className="w-full h-full object-cover object-center" />
                    )}
                  </m.div>

                  <m.div variants={fade} className="md:col-span-1 md:h-screen relative px-4 pt-8 pb-20 md:py-24 md:mt-2 xl:mt-5 overflow-hidden md:mb-0 bg-offwhitelight flex" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
                    <div className="mt-auto w-full md:p-3 xl:p-5">
                      <h1 className="relative expertise-title w-11/12 md:w-10/12 xl:w-8/12 textreveal">{title}</h1>

                      <p className="text-lg w-11/12 md:w-10/12 xl:w-8/12 block">{heroText}</p>
                    </div>
                  </m.div>
                </div>
              </m.section>

              <m.section
                initial="initial"
                className=""
                animate="enter"
                exit="exit"
              >
                <div>
                  <m.div variants={fade} className="-mt-5 relative z-50 bg-offwhite border-t border-b border-black pt-20 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
                    <div className="text-3xl md:text-4xl xl:text-5xl leading-none w-9/12 md:w-8/12 xl:w-7/12 max-w-4xl">
                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={introText} />
                    </div>
                  </m.div>
                </div>
              </m.section>

              <m.section
                initial="initial"
                className=""
                animate="enter"
                exit="exit"
              >
                <div className="grid md:grid-cols-5 relative z-10 border-b border-black">

                  <m.div variants={fade} className="md:col-span-2 md:min-h-[900px] relative overflow-hidden md:mb-0 bg-offwhitelight flex pt-20">
                    <div className="mt-auto w-full">
                      <h2 className="relative expertise-title w-11/12 md:w-10/12 xl:w-8/12 textreveal px-4 md:px-4 xl:px-8 pb-3 md:pb-6 xl:pb-10">Our <span className="italic">process</span></h2>
                      
                      <div className="border-t border-black">
                        <Accordion>
                          {process.map(({ title, description }, i) => {
                            return (
                              <div
                                key={i}
                                className={`block text-xl md:text-xl lg:text-2xl xl:text-3xl px-4 md:px-4 xl:px-8 hover:bg-offwhite transition-colors ease-in-out duration-300 ${ i !== process.length - 1 ? 'border-b border-black' : ''}`} 
                                onMouseOver={() => setCurrentHoveredImage(i + 1)}
                                onMouseOut={() => setCurrentHoveredImage(0)}
                                onClick={() => setImageLock(true) & setCurrentImage(i + 1)}
                              >

                                <AccordionItem>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      <div className="flex w-full py-2">
                                        <span className="block">{title}</span>
                                        <span className="block ml-auto mt-[1px] md:mt-0">+</span>
                                      </div>
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p className="text-base block mb-3 w-10/12">
                                      {description}
                                    </p>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              </div>
                            )
                          })}
                        </Accordion>
                      </div>
                    </div>
                  </m.div>

                  <m.div variants={fade} className="md:col-span-3 md:min-h-[900px] relative overflow-hidden bg-offwhite md:border-l border-black">
                    { heroImage && (
                      <img src={heroImage.asset.url} className="w-full h-full object-cover object-center" />
                    )}

                    {process.length > 0 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 1 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[0].supportingImage.asset.url} alt="" />
                      </div>
                    )}
                    
                    {process.length > 1 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 2 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[1].supportingImage.asset.url} alt="" />
                      </div>
                    )}
                    
                    {process.length > 2 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 3 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[2].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 3 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 4 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[3].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 4 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 5 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[4].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 5 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 6 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[5].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 6 && (
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 5 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[6].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 0 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 1 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[0].supportingImage.asset.url} alt="" />
                      </div>
                    )}
                    
                    {process.length > 1 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 2 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[1].supportingImage.asset.url} alt="" />
                      </div>
                    )}
                    
                    {process.length > 2 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 3 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[2].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 3 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 4 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[3].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 4 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 5 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[4].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 5 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 6 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[5].supportingImage.asset.url} alt="" />
                      </div>
                    )}

                    {process.length > 6 && (
                      <div className={`absolute inset-0 z-[1000] transition-opacity ease-in-out duration-500 ${ currentHoveredImage == 5 ? 'opacity-100' : 'opacity-0' }`}>
                        <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={process[6].supportingImage.asset.url} alt="" />
                      </div>
                    )}
                  </m.div>
                </div>
              </m.section>

              <m.section
                initial="initial"
                className=""
                animate="enter"
                exit="exit"
              >
                <div className="grid md:grid-cols-5 border-b border-black -mt-px">

                  <m.div variants={fade} className="md:col-span-5 relative overflow-hidden md:mb-0 bg-offwhitelight flex pt-20 md:pt-40 pb-5">
                    <div className="mt-auto w-full">
                      <h4 className="px-4 md:px-4 xl:px-8">Architecture projects will go here..</h4>
                    </div>
                  </m.div>
                </div>
              </m.section>
                
              <m.section
                initial="initial"
                className=""
                animate="enter"
                exit="exit"
              >
                <div>
                  <m.div variants={fade} className="-mt-5 relative z-50">
                    {supportingImage && (
                      <img src={supportingImage.asset.url} className="w-full border-t border-black" />
                    )}
                    <Footer />
                  </m.div>
                </div>
              </m.section>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('expertises')
  return {
    paths: paths,
    fallback: false,
  };
}