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
import ImageWrapper from '@/components/image-wrapper'

const query = `{
  "about": *[_type == "about"][0]{
    title,
    heroImage {
      asset ->
    },
    heroText,
    ourMission,
    ourTeam,
    supportingImage {
      asset ->
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  },
  "team": *[_type == "team"]{
    name,
    image {
      asset->
    },
    jobTitle,
    bio
  }
}`

const pageService = new SanityPageService(query)

export default function About(initialData) {
  const { data: { about, team }} = pageService.getPreviewHook(initialData)() 
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title={about.title} />

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
                <div className="grid md:grid-cols-2 pt-12 md:pt-14 xl:pt-14">
                  
                  <div className="absolute top-0 left-0 right-0 bottom-0" id="pinned-pane"></div>

                  <m.div variants={fade} className="md:col-span-1 md:h-screen relative px-4 pt-5 pb-40 md:py-24 md:mt-2 xl:mt-5 overflow-hidden md:mb-0 bg-offwhitelight" data-scroll-sticky data-scroll data-scroll-target="#pinned-pane">
                    <h1 className="mb-0 pb-0 md:-mt-16 xl:-mt-20 relative about-title w-12/12 md:w-10/12 xl:w-8/12 xl:pr-0 textreveal">
                    <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        At Reform we thrive
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        on <span className="italic">identifying</span> 
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        development
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        opportunities both
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        for ourselves <span className="italic">&amp;</span> for
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        land owners who may
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        not yet have spotted 
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        the <span className="italic">true potential</span>
                        </m.span>
                      </span>
                      <span className="overflow-hidden block">
                        <m.span
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                          className="block">
                        of their property assets.
                        </m.span>
                      </span>
                    </h1>
                    {/* <div className="top-0 left-0 right-0 bottom-0 absolute h-full z-0 flex items-center justify-center">
                      <Motif classList={"w-1/2 md:-mt-16 xl:-mt-20 motif skew-y-12"} />
                    </div> */}
                  </m.div>

                  <m.div variants={fade} className="md:col-span-1 border-t md:border-l md:border-t-0 border-black bg-black texture-overlay texture-overlay--dark text-offwhite relative select-dark">
                    <div className="content relative" id="content-pane">
                      
                      {/* <div className="h-full about-content"> */}
                      <div className="h-full">
                        {/* z-30 here */}

                        <div className="mb-12 md:mb-16 xl:mb-24 z-30">

                          <div className="hidden md:block h-screen relative z-40 pointer-events-none" data-scroll-sticky data-scroll data-scroll-target="#scroll-container">
                            <div className="w-full h-64 hidden md:block from-black via-black to-transparent absolute bottom-0 left-0 right-0 bg-gradient-to-t z-40"></div>
                          </div>

                          <ImageWrapper
                            image={about.heroImage.asset}
                            className="w-full object-cover object-center relative md:h-screen will-change z-50 md:-mt-100vh"
                            baseWidth={900}
                            baseHeight={1600}
                            fill
                          />

                          {/* <Img fluid={ this.props.data.about.image.fluid } className="w-full object-cover object-center relative md:h-screen will-change z-50 md:-mt-100vh" /> */}

                          <div className="md:p-12 xl:p-16 md:pt-24 xl:pt-32 relative z-30">

                            <div className="border-b border-offwhite px-4 md:px-0 pb-8 md:pb-12 xl:pb-16">
                              <div className="lg:flex lg:flex-wrap items-start pt-12 md:pt-0">
                                <div className="scrollreveal">
                                  <h2 className="mb-8 md:mb-12 xl:mb-16 lg:pt-2 text-offwhite italic select-dark">Our<br/>mission</h2>
                                </div>
                              </div>


                              <div className="lg:flex lg:flex-wrap items-start px-0 md:px-0 pt-0 md:pt-0">
                                {/* <NumberShape number="A" white /> */}
                                <div className="scrollreveal w-11/12 md:w-9/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 xl:max-w-lg">
                                  <div className="xl:text-xl pt-3 lg:pt-0 select-dark">
                                    <BlockContent serializers={{ container: ({ children }) => children }} blocks={about.ourMission} />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* <div className="mt-16 mb-20 md:mt-20 md:mb-32 xl:mt-32 xl:mb-40">
                              {this.props.data.projects.edges.map(({ node }, i) => {
                                return (
                                  <m.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-6 md:mb-12 xl:mb-16 mx-auto" key={i}>
                                    <Link className="block relative group about-image-teaser" to={`/about/${node.slug}`}>
                                      <div className="overflow-hidden mb-5 scrollreveal">
                                        <div className="overflow-hidden grayimage gatsby-image-wrapper">
                                          <Img fluid={ node.image[0].fluid } backgroundColor={'#333333'} className="w-full h-auto mb-0 pb-0 block transform transition ease-in-out duration-1000 group-hover:scale-110 group-focus:scale-110 scale-105 will-change" />
                                        </div>
                                      </div>
                                      <div className="pb-5 mb-5 relative px-4 md:px-0">
                                        <span className="overflow-hidden block scrollreveal mb-1">
                                          <span className=" block">
                                            <h4 className="mb-0 block text-center">{ node.title }</h4>
                                          </span>
                                        </span>

                                        <span className="overflow-hidden block scrollreveal">
                                          <span className=" block">
                                            <span className="text-sm block italic text-center">{ node.location }</span>
                                          </span>
                                        </span>
                                      </div>
                                    </Link>
                                  </m.div>
                                )
                              })}
                            </div> */}
                          
                            <div className="my-12 md:my-16 xl:my-24 px-4 md:px-0">                        

                              <div className="lg:flex lg:flex-wrap items-start">
                                <div className="scrollreveal">
                                  <h2 className="mb-8 md:mb-12 xl:mb-16 lg:pt-2 text-offwhite italic">Our<br/>team</h2>
                                </div>
                              </div>

                              <div className="lg:flex lg:flex-wrap items-start md:px-0 pt-0 md:pt-0 mb-12 md:mb-16 xl:mb-24">
                                {/* <NumberShape number="A" white /> */}
                                <div className="scrollreveal w-11/12 md:w-9/12 lg:w-9/12 xl:w-10/12 2xl:w-9/12 xl:max-w-lg">
                                  <div className="xl:text-lg pt-3 lg:pt-0">
                                    <BlockContent serializers={{ container: ({ children }) => children }} blocks={about.ourTeam} />
                                  </div>
                                </div>
                              </div>

                              {team.map(({ name, jobTitle, bio, image }, i) => {
                                return (
                                  <m.div varians={fade} data-scroll className="w-full md:w-10/12 lg:w-9/12 mb-16 md:mb-20 xl:mb-24 relative" key={i}>
                                    <div className="flex flex-wrap items-center border-b border-offwhite pb-5 mb-5">
                                      <div className="w-full mb-5">
                                        {image && (
                                          <ImageWrapper
                                            image={image.asset}
                                            className="w-full"
                                            baseWidth={900}
                                            baseHeight={550}
                                          />
                                        )}
                                      </div>

                                      <h4 className="mb-0 pb-0">
                                        <span className="overflow-hidden block scrollreveal">
                                          <span className=" block">
                                            { name }
                                          </span>
                                        </span>
                                      </h4>
                                      
                                      { jobTitle && (
                                        <span className="ml-auto overflow-hidden block scrollreveal">
                                          <span className="block">
                                            <span className="text-xs md:text-sm italic">{ jobTitle }</span>
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                    
                                    <div className="scrollreveal">
                                      <div className="xl:text-lg w-11/12">
                                        <p>{bio}</p>
                                      </div>
                                    </div>
                                  </m.div>
                                )
                              })}
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
                    {about.supportingImage && (
                      <ImageWrapper
                        image={about.supportingImage.asset}
                        className="w-full"
                        baseWidth={1600}
                        baseHeight={800}
                      />
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
    props: props
  }
}