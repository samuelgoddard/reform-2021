import { useRef, useState } from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Home from 'pages'
import ImageWrapper from '@/components/image-wrapper'

const query = `{
  "expertises": *[_type == "expertises"] | order(order asc) {
    title,
    heroText,
    heroImage {
      asset ->
    },
    slug {
      current
    }
  },
  "menu": *[_type == "menu"][0]{
    images[] {
      asset->
    },
  },
  "home": *[_type == "home"][0]{
    heroImage {
      asset ->
    },
  },
  "about": *[_type == "about"][0]{
    heroImage {
      asset ->
    },
  },
  "contact": *[_type == "contact"][0]{
    instragram,
    linkedin
  }
}`

const pageService = new SanityPageService(query)

export default function Menu(initialData) {
  const { data: { expertises, home, about, menu, contact }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  
  const [currentHoveredImage, setCurrentHoveredImage] = useState(0);
  const [imageLock, setImageLock] = useState(false);

  return (
    <Layout>
      <NextSeo title="Menu" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <LazyMotion features={domAnimation}>
              <m.section
                className=""
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="overflow-hidden">
                  <div className="pt-12 md:pt-16 xl:pt-20 md:h-screen">
                    <m.div variants={fade} className="flex flex-wrap md:h-full">
                      <div className="w-full md:w-1/2 xl:w-1/3 border-r border-black relative h-[35vh] md:h-full hidden md:block overflow-hidden">
                        
                          <ImageWrapper
                            image={menu.images[0].asset}
                            className={`absolute inset-0 object-center object-cover transition-all w-full h-full ease-in-out duration-[1000ms] ${ currentHoveredImage == 0 ? 'opacity-100' : 'opacity-0' }`}
                            baseWidth={900}
                            baseHeight={1200}
                            fill
                          />

                        {/* <img src={menu.images[0].asset.url} className="absolute inset-0 object-center object-cover w-full h-full" /> */}

                        {menu.images.length > 0 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[1].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 1 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[2].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 2 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[3].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 3 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[4].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}
                        
                        {menu.images.length > 4 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[5].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 5 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 6 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[6].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 6 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[7].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}

                        {menu.images.length > 7 && (
                          <div className={`absolute inset-0 z-100 transition-all ease-in-out duration-[1000ms] ${ currentHoveredImage == 8 ? 'opacity-100 scale-100' : 'opacity-0 scale-105' }`}>
                            <div className="w-full h-full transform inset-0">
                              <ImageWrapper
                                image={menu.images[8].asset}
                                className="object-cover object-top absolute inset-0"
                                baseWidth={900}
                                baseHeight={1200}
                                fill
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-full md:w-1/2 xl:w-2/3 md:h-full">
                        <div className="flex flex-wrap h-full items-center">
                          <nav className="w-full tracking-tighter">
                            <ul>
                              <li>
                                <Link href="/">
                                  <a
                                    onMouseOver={() => setCurrentHoveredImage(1)}
                                    onMouseOut={() => setCurrentHoveredImage(0)}
                                    className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-t border-b border-black">Home</a>
                                </Link>
                              </li>

                              <li><Link href="/about">
                                <a
                                  onMouseOver={() => setCurrentHoveredImage(2)}
                                  onMouseOut={() => setCurrentHoveredImage(0)}
                                  className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-b border-black">About Us
                                </a>
                              </Link></li>

                              <li><Link href="/projects"><a onMouseOver={() => setCurrentHoveredImage(3)}
                                  onMouseOut={() => setCurrentHoveredImage(0)} className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-b border-black">Projects</a></Link></li>

                              {expertises.map(({ title, slug }, i) => {
                                return (
                                  <li><Link href={`/${slug.current}`}><a onMouseOver={() => setCurrentHoveredImage(i + 4)}
                                  onMouseOut={() => setCurrentHoveredImage(0)} className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-b border-black">{title}</a></Link></li>
                                )
                              })}

                              <li><Link href="/journal"><a onMouseOver={() => setCurrentHoveredImage(7)} onMouseOut={() => setCurrentHoveredImage(0)} className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-b border-black">Journal</a></Link></li>

                              <li><Link href="/contact"><a onMouseOver={() => setCurrentHoveredImage(8)} onMouseOut={() => setCurrentHoveredImage(0)} className="block transition-all ease-in-out duration-300 p-4 md:px-10 md:py-5 xl:px-16 xl:py-6 md:hover:pl-14 xl:hover:pl-20 text-xl md:text-4xl xl:text-5xl border-b border-black">Contact</a></Link></li>
                            </ul>
                          </nav>

                          <div className="md:absolute md:bottom-0 md:right-0 md:w-1/2 xl:w-2/3 flex flex-wrap text-right justify-end pl-2 md:pl-0 md:pr-6 md:pb-2">
                            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className={ `text-sm md:text-lg xl:text-xl uppercase font-medium block px-2 py-4 group underline`}>
                              <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                                <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                  <span className="block transform translate">Insta<span className="hidden md:inline">gram</span></span>
                                  <span className="hidden md:block">Insta<span className="hidden md:inline">gram</span></span>
                                </span>
                              </span>
                            </a>

                            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={ `text-sm md:text-lg xl:text-xl uppercase font-medium block px-2 py-4 group underline`}>
                              <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                                <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                  <span className="block transform translate">LinkedIn</span>
                                  <span className="hidden md:block">LinkedIn</span>
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </div>
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
    props: props
  }
}