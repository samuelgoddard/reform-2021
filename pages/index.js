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
import ImageWrapper from '@/components/image-wrapper'
import BlockContent from '@sanity/block-content-to-react'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    heroImage {
      asset ->
    },
    heroText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
  },
  "expertises": *[_type == "expertises"] | order(order asc){
    title,
    teaserText,
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, expertises }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={home.title}
      />
      
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
                <m.div className="overflow-hidden" variants={fade} className="bg-offwhitelight">
                  <div className="pt-10 md:pt-12 xl:pt-16">
                    <m.div variants={fade} className="pt-12 md:pt-16 xl:pt-16 relative z-10">
                      
                      <div className="flex flex-wrap items-center px-5 md:px-8">
                        <div className="w-full md:w-9/12 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1127 240" className="">
                            <defs>
                              <clipPath id="clip-logo-stroke">
                                <rect width="1127" height="240"/>
                              </clipPath>
                            </defs>
                            
                            {/* Clip path for stroke */}
                            <g id="logo-stroke" clipPath="url(#clip-logo-stroke)">
                              {/* Negative offset translate here... */}
                              <g id="Group_107" data-name="Group 107" transform="translate(-33 0)">
                                {/* R first */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 33 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}  d="M0,.48H90.409c44.03,0,73.384,23.678,73.384,63.257,0,32.142-15.264,49.9-39.872,56.114v.587c49.51,9.784,31.457,97.258,43,100.976v1.761H136.983c-9.784-9.344,11.5-90.066-44.911-90.066H28.033v90.066H0ZM28.033,108.109H83.853c23.042,0,52.053-2.789,52.053-41.437S106.9,25.43,83.853,25.43H28.033Z" fill="#333" />

                                {/* E */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 182.501 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}  d="M180.872,95.536v24.9H66.492V198.42H199.561v24.755H38.41V.48H195.842V25.43H66.492V95.536Z" fill="#333" />

                                {/* F */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 329.316 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}  d="M203.573,97.738v24.95h-99.41V223.175H76.13V.48H227.154V25.43H104.163V97.738Z" fill="#333" />  

                                {/* O FILLED */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 437.674 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                  id="Path_8" className="" data-name="Path 8" d="M245.163.016a59.832,59.832,0,0,1,25.293,4.892,45.449,45.449,0,0,1,17.318,13.6A61.3,61.3,0,0,1,297.95,39.154a93.638,93.638,0,0,1,3.376,25.88,138.408,138.408,0,0,1-5.235,36.3A197.8,197.8,0,0,1,281.415,139a223.628,223.628,0,0,1-22.5,35.42,180.428,180.428,0,0,1-28.717,29.745,136.248,136.248,0,0,1-33.463,20.352,92.952,92.952,0,0,1-36.643,7.583,60.762,60.762,0,0,1-25.2-4.892,45.009,45.009,0,0,1-17.514-13.6,61.3,61.3,0,0,1-10.078-20.5,95.788,95.788,0,0,1-3.327-25.88,138.257,138.257,0,0,1,5.039-36.447,197.8,197.8,0,0,1,14.677-37.67,227.589,227.589,0,0,1,22.5-35.469A182.629,182.629,0,0,1,174.96,27.9,138.207,138.207,0,0,1,208.373,7.6,92.953,92.953,0,0,1,245.163.016Zm24.461,56.8a89.769,89.769,0,0,0-1.859-18.493,43.589,43.589,0,0,0-6.213-15.264,30.577,30.577,0,0,0-11.937-10.42,41.389,41.389,0,0,0-18.982-3.865,46.77,46.77,0,0,0-27.739,9.246A101.9,101.9,0,0,0,179.362,42.04a193.639,193.639,0,0,0-18.835,33.12,300.877,300.877,0,0,0-13.747,36.594,294.844,294.844,0,0,0-8.415,34.637,161.106,161.106,0,0,0-2.886,26.712,89.771,89.771,0,0,0,1.859,18.493,45.644,45.644,0,0,0,6.066,15.313A29.99,29.99,0,0,0,155,217.33a39.529,39.529,0,0,0,18.493,3.865,48.091,48.091,0,0,0,28.473-9.246,100.535,100.535,0,0,0,23.678-24.021,189.08,189.08,0,0,0,18.835-33.12,329.854,329.854,0,0,0,13.943-36.643,276.316,276.316,0,0,0,8.561-34.637,161.113,161.113,0,0,0,2.74-26.712Z" fill="#333" stroke="#333" />      

                                {/* R */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 607.028 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, delay: 0.4, ease: [0.76, 0, 0.24, 1] }} d="M147.48.48h90.6c44.03,0,73.384,23.678,73.384,63.257,0,32.142-15.313,49.9-39.921,56.114v.587c49.558,9.784,31.506,97.258,43,100.976v1.761H284.316c-9.785-9.344,11.546-90.066-44.862-90.066H175.513v90.066H147.48Zm28.033,107.629h55.772c23.091,0,52.053-2.789,52.053-41.437s-28.962-41.437-52.053-41.437H175.513Z" fill="#333"></m.path>
                                
                                {/* M */}
                                <m.path
                                  initial={{ translateY: 500.666, translateX: 756.529 }}
                                  animate={{ translateY: 0 }}
                                  transition={{ duration: 1.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}  d="M185.89.48h38.355L294.058,185.6h.587L364.457.48h38.355v222.7H374.78V40.058h-.636L306.826,223.175h-24.95L214.559,40.058h-.636V223.175H185.89Z" fill="#333"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="w-full md:w-3/12 hidden md:block">
                          <m.div 
                            initial={{ translateX: "100%" }}
                            animate={{ translateX: "0" }}
                            transition={{ duration: 2.2, ease: [0.76, 0, 0.24, 1] }}
                            className="w-full h-px bg-offblack ml-8">
                          </m.div>
                        </div>
                      </div>
                    </m.div>

                    <m.div variants={fade} className="pt-5 md:-mt-4 xl:-mt-8 border-b border-black relative">
                      <div className="pb-12 md:pb-20 3xl:pb-32 bg-offwhitelight">
                        <div className="relative lg:-mt-12">

                          <div className="flex-wrap absolute top-0 left-0 hero-image-tagline hidden lg:flex z-[4]" data-scroll data-scroll-speed={-0.5}>
                            <span className="block ml-5 leading-tight">
                              <span className="overflow-hidden block">
                                <m.span
                                  initial={{ y: "100%" }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
                                  className="block">
                                Helping to transform
                                </m.span>
                              </span>
                              <span className="overflow-hidden block">
                                <m.span
                                  initial={{ y: "100%" }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
                                  className="block">
                                the landscape of
                                </m.span>
                              </span>
                              <span className="overflow-hidden block">
                                <m.span
                                  initial={{ y: "100%" }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 1, delay: 0.45, ease: [0.76, 0, 0.24, 1] }}
                                  className="block">
                                property development
                                </m.span>
                              </span>
                            </span>
                          </div>

                          <div className="relative mt-[-15vw] md:mt-[-15vw] xl:mt-[-13vw]">
                            {/* <img src={home.heroImage.asset.url} className="w-full home-image bg-offwhitelight will-change transform scale-125 origin-top-right md:scale-100" /> */}

                            <div className="absolute top-0 left-0 right-0 w-full md:h-[14vw] xl:h-[12vw] bg-gradient-to-b from-offwhitelight via-offwhitelight to-transparent z-[5] -mt-1"></div>

                              <div className="relative overflow-hidden border-b border-black w-full h-[55vw] hidden md:block z-[1]">
                                <div className="absolute h-full w-full inset-0 z-[1]" data-scroll
                                  data-scroll-speed={-1}>
                                  <ImageWrapper
                                    image={home.heroImage.asset}
                                    className="w-full h-full inset-0 absolute home-image bg-offwhitelight will-change transform hidden md:block z-[4] pb-0 mb-0 object-cover object-center mt-[0.7vw]"
                                    baseWidth={1600}
                                    baseHeight={880}
                                    fill
                                  />
                                </div>
                              </div>

                              <ImageWrapper
                                image={home.heroImage.asset}
                                className="w-full home-image bg-offwhitelight will-change transform  origin-top-right md:scale-100 block md:hidden z-[4]"
                                baseWidth={900}
                                baseHeight={900}
                              />
                            {/* <Img fluid={ this.props.data.home.image.fluid } className="w-full home-image bg-offwhitelight will-change transform scale-125 origin-top-right md:scale-100" /> */}
                          </div>
                        </div>

                        <div className="flex flex-wrap">
                          <div className="flex-1 hidden md:block">
                            <div className="w-full h-px mr-12"></div>
                          </div>
                          
                          <div className="w-11/12 md:w-full md:max-w-xl xl:max-w-3xl 3xl:max-w-5xl text-right ml-auto mt-6 md:mt-8 px-4 md:pr-8 xl:pr-12 flex flex-wrap">
                            <div className="ml-auto text-right w-full md:w-auto mb-3 flex md:block">
                              <div className="ml-auto">
                                <NumberShape number="R" />
                              </div>
                            </div>

                            <div className="ml-auto scrollreveal">
                              <h2 className="text-3xl md:text-5xl xl:text-6xl 3xl:text-6xl relative z-10 w-full block xl:pl-16 3xl:pl-16 textrevealnonescrollContent text-right split-right">
                                <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.heroText} />
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div  className="flex flex-wrap pb-8 md:pb-16 xl:pb-20 px-4 md:px-12 lg:px-16 xl:px-20 scrollreveal">
                        <div className="w-1/2 ">
                          <span className="text-base md:text-lg xl:text-xl uppercase font-medium block">
                          <span className="inline-block transform rotate-90 -ml-1">↳</span> What We Do
                          </span>
                        </div>
                        <div className="w-1/2 text-right  split-right">
                        <Link href="/about">
                          <a className="text-base md:text-lg xl:text-xl uppercase font-medium inline-block border-b border-black group">
                            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6">
                              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                <span className="block transform translate">About Us</span>
                                <span className="hidden md:block">About Us</span>
                              </span>
                            </span>
                          </a>
                        </Link>
                        </div>
                      </div>
                    </m.div>

                    <m.div variants={fade} className="content bg-offwhite">
                      <div className="">
                        <div className="">
                          <div className="flex flex-wrap">
                            {expertises.map(({ title, teaserText, slug }, i) => {
                              return (
                                <div key={i} className={`w-full lg:w-1/3 lg:border-r p-4 pt-8 md:p-12 lg:p-16 xl:p-20 ${ i === expertises.length - 1 ? 'border-b border-offblack md:border-b-0' : 'border-b border-offblack' }`}>
                                  
                                  <div className="scrollreveal">
                                    <h3 className="h4 flex flex-wrap items-center w-full mb-6 md:mb-8">
                                    
                                    {/* <NumberShape number={i + 1} /> */}
                                    
                                    <span className="flex-1 -mt-1 inline-block pr-12 md:pr-0 ">{ title }</span></h3>
                                    <div className="w-110/12 md:w-11/12 xl:w-10/12 xl:max-w-2xl xl:text-lg" dangerouslySetInnerHTML={{ __html: teaserText }} />

                                    <Link href={`/${slug.current}`}>
                                      <a className={ `text-sm md:text-lg mt-6 uppercase font-medium block group underline`}>
                                        <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                                          <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                                            <span className="block transform translate">Learn More</span>
                                            <span className="hidden md:block">Learn More</span>
                                          </span>
                                        </span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              )
                            })} 
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </div>

                  <m.div variants={fade}>
                    <Footer />
                  </m.div>
                </m.div>
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