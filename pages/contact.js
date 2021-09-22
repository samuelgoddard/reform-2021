import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NumberShape from '@/components/numberShape'
import { useRef } from 'react'
import BlockContent from '@sanity/block-content-to-react'

const query = `{
  "contact": *[_type == "contact"][0]{
    title,
    emailAddress,
    phoneNumber,
    instagram,
    linkedin,
    address
  }
}`

const pageService = new SanityPageService(query)

export default function Contact(initialData) {
  const { data: { contact }} = pageService.getPreviewHook(initialData)() 
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Contact" />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.1 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>

            <LazyMotion features={domAnimation}>
              <div className="md:h-screen flex flex-wrap flex-col">
                <m.section
                  initial="initial"
                  className="flex-1 "
                  animate="enter"
                  exit="exit"
                >
                  <div className="flex flex-wrap pt-16 md:pt-16 xl:pt-20 relative h-full">
                    <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

                    <m.div variants={fade} className="w-full md:w-4/12 2xl:w-3/12 relative overflow-hidden order-2 md:order-1 bg-offwhitelight">

                      <span className="top-0 left-0 md:absolute block p-4">
                        <NumberShape number="C" />
                      </span>
                      <span className="bottom-0 left-0 md:absolute block max-w-xs p-4 pb-12 xl:text-lg">
                        <span className="block mb-3 md:mb-10 textreveal">
                          <span className="text-base md:text-lg xl:text-xl uppercase font-medium block">
                          <span className="inline-block transform rotate-90">↳</span> Get in touch</span>
                        </span>
                        { contact.address && (
                          <p className="mb-4 block textreveal">{contact.address}</p>
                        )}
                        { contact.emailAddress && (
                          <a href={`mailto:${contact.emailAddress}`} className="block group textreveal underline">
                            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                <span className="block transform translate">{contact.emailAddress}</span>
                                <span className="hidden md:block">{contact.emailAddress}</span>
                              </span>
                            </span>
                          </a>
                        )}
                        { contact.phoneNumber && (
                          <a href={`tel:${contact.phoneNumber}`} className="block group textreveal underline">
                            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                <span className="block transform translate">{contact.phoneNumber}</span>
                                <span className="hidden md:block">{contact.phoneNumber}</span>
                              </span>
                            </span>
                          </a>
                        )}
                      </span>
                    </m.div>

                    <m.div variants={fade} className="w-full md:w-8/12 2xl:w-9/12 relative z-30 md:border-l border-black pb-16 md:pb-0 order-1 md:order-2 flex items-center contact-content-outer bg-offwhitelight">
                      <div className="max-w-6xl content relative h-full contact-content w-full">
                        <div className="py-4 px-4 md:py-0 md:px-16 xl:px-20 relative z-10 flex flex-wrap items-center h-full contact-content-inner">
                          <div className="w-full">
                            <h1 className="contact-title mb-8 md:mb-12 3xl:mb-16 textreveal">
                              Let's talk about your <span className="block">next project</span>
                            </h1>
                            
                            <form className="block w-full max-w-xl" action="https://formspree.io/f/xzbydvwa" method="POST">
                              <span className="overflow-hidden block relative mb-3 md:mb-5">
                                <m.span
                                  initial={{ translateX: "-100%" }}
                                  animate={{ translateX: 0 }}
                                  transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                  className="block w-full h-px bg-black absolute bottom-0 left-0"></m.span>
                                  <input type="text" name="name" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Name *" required />
                              </span>
                              <span className="overflow-hidden block relative mb-3 md:mb-5">
                                <m.span
                                  initial={{ translateX: "-100%" }}
                                  animate={{ translateX: 0 }}
                                  transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                                  className="block w-full h-px bg-black absolute bottom-0 left-0"></m.span>
                                  <input type="email" name="_replyto" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Email *" required />
                              </span>
                              <span className="overflow-hidden block relative mb-3 md:mb-5">
                                <m.span
                                  initial={{ translateX: "-100%" }}
                                  animate={{ translateX: 0 }}
                                  transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                  className="block w-full h-px bg-black absolute bottom-0 left-0"></m.span>
                                  <input type="tel" name="telephone" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Phone" required />
                              </span>
                              <span className="overflow-hidden block relative mb-6 md:mb-12">
                                <m.span
                                  initial={{ translateX: "-100%" }}
                                  animate={{ translateX: 0 }}
                                  transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                                  className="block w-full h-px bg-black absolute bottom-0 left-0"></m.span>
                                  <textarea rows="2" name="projectdetails" className="bg-offwhitelight transition-all ease-in-out duration-500 focus:pl-3 font-sans py-3 border-black text-lg md:text-xl 3xl:text-2xl focus:outline-none hover:outline-none w-full block" placeholder="Project Details" />
                              </span>
                              
                              <span className="overflow-hidden block relative">
                                <m.span
                                  initial={{ translateY: "100%" }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
                                  className="block">
                                    <button type="submit" className="focus:outline-none hover:outline-none text-base md:text-lg xl:text-xl uppercase font-medium block group border-b border-black">
                                      <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                                        <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                          <span className="block transform translate">Send Details</span>
                                          <span className="hidden md:block">Send Details</span>
                                        </span>
                                      </span>
                                    </button>
                                </m.span>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </div>
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)

  return {
    props: props
  }
}