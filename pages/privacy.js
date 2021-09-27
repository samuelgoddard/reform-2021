import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Link from 'next/link'
import NumberShape from '@/components/numberShape'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import BlockContent from '@sanity/block-content-to-react'

const query = `{
  "privacy": *[_type == "privacy"][0]{
    title,
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  },
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

export default function Privacy(initialData) {
  const { data: { privacy, contact }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Privacy Policy" />
      
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
                className="bg-offwhitelight"
                animate="enter"
                exit="exit"
              >
                <div className="grid md:grid-cols-3 pt-16 md:pt-16 xl:pt-20">
                  {/* The Pinned area - BUGFIX */}
                  <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

                  <m.div variants={fade} className="md:col-span-1 md:h-screen relative px-4 py-6 md:py-24 md:px-12 md:mt-2 xl:mt-5 overflow-hidden" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
                    <h1 className="mb-0 pb-0 md:-mt-12 xl:-mt-16 relative about-title md:w-12/12 xl:w-12/12 xl:pr-0 textreveal project-title">
                      Privacy Policy
                    </h1>

                    <span className="block max-w-xs pt-6 pb-6 md:pb-12 md:pt-24 xl:text-lg">
                      { contact.address && (
                        <span className="mb-4 block textreveal">{contact.address }</span>
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
                    {/* <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                      <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 motif skew-y-12"} />
                    </div> */}
                  </m.div>

                  <m.div variants={fade} className="md:col-span-2 bg-offwhitelight texture-overlay texture-overlay--dark text-offblack relative">
                    <div className="content relative" id="content-pane">
                      
                      {/* <div className="h-full about-content"> */}
                      <div className="h-full">
                        {/* z-30 here */}

                        <div className="mb-12 md:mb-24 xl:mb-32">

                          {/* <div className="h-screen z-50" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                            <div className="w-full h-56 hidden md:block from-black via-black to-transparent absolute bottom-0 left-0 right-0 bg-red-500 z-50"></div>
                          </div> */}

                          {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change md:-mt-100vh" /> */}

                          {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change" /> */}

                          <div className="p-4 md:p-12 xl:p-16 md:pt-32 xl:pt-40 relative z-30">
                            <div className="lg:flex lg:flex-wrap items-start content">
                              {/* <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-8/12" dangerouslySetInnerHTML={{ __html:this.props.data.about.content }}>
                              </div> */}
                              <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-8/12">
                                <BlockContent serializers={{ container: ({ children }) => children }} blocks={privacy.content} />
                              </div>
                            </div>
                          
                          </div>
                        </div>
                      </div>
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
    props: props
  }
}