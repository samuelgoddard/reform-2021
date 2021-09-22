import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NumberShape from '@/components/numberShape'

const query = `*[_type == "projects" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  title,
  year,
  location,
  images[] {
    asset->
  },
  description,
  expertises-> {
    title
  },
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function Project(initialData) {
  const { data: { title, seo, year, images, expertises, slug, location, description }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

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
                className=""
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div className="overflow-hidden">
                  <m.div variants={fade} className="bg-offwhitelight pt-12 md:pt-16 xl:pt-20 border-b border-black mb-5 md:mb-0">
                    <div className="w-full border-b border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 md:text-lg pt-6 pb-4 xl:pt-6 xl:pb-5 justify-center md:justify-start">
                      <Link href="/projects"><a className="block">Back to projects</a></Link>
                    </div>

                    <h1 className="expertise-title block px-4 md:px-6 xl:px-8 text-center pt-16 pb-8 md:pt-24 md:pb-16 xl:pt-32 xl:pb-24">{title}</h1>

                    <div className="w-full border-t border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 md:text-lg py-4 xl:py-5 justify-center md:justify-start">
                      <span className="block">{year}</span>
                      <span className="block px-4">&bull;</span>
                      <span className="block">{location}</span>
                      <span className="block px-4">&bull;</span>
                      <span className="block">{expertises.title}</span>
                      
                      <span className="ml-auto hidden md:block">Copy Link</span>
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
                  <m.div variants={fade} className="relative z-50 bg-offwhite flex flex-wrap">
                    <div className="w-full md:w-8/12 border-b md:border-b-0 md:border-r border-black relative">
                      {images.map(({ asset }, i) => {
                        return (
                          <div className={` mb-4 md:mb-6 xl:mb-8 pb-4 md:pb-6 xl:pb-8 px-4 md:px-6 xl:px-8 ${i !== images.length - 1 ? 'border-b border-black' : 'pb-0 md:pb-0 xl:pb-0' } ${i == 0 ? 'md:pt-6 xl:pt-8' : '' }`}>
                            <img src={asset.url} className="w-full border border-black" key={i} />
                          </div>
                        )
                      })}
                    </div>
                    <div className="w-full md:w-4/12 p-4 pt-20 pb-8 md:p-12 md:pt-24 xl:p-16 xl:pt-32">
                      <div className="mb-4">
                        <NumberShape number="R" />
                      </div>

                      <p className="md:text-lg w-10/12 md:w-11/12 xl:w-10/12">{description}</p>
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
                  <m.div variants={fade} className="relative z-50">
                    <div className="w-full border-t border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 text-xl md:text-2xl xl:text-3xl py-6 xl:py-8 justify-center bg-offwhitelight">
                      <span className="block">Next Project: Sam to integrate...</span>
                    </div>

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
  const paths = await pageService.fetchPaths('projects')
  return {
    paths: paths,
    fallback: false,
  };
}