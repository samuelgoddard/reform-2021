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
import BlockContent from '@sanity/block-content-to-react'

const query = `*[_type == "journal" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  title,
  metaType,
  date,
  images[] {
    asset->
  },
  content,
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function Journal(initialData) {
  const { data: { title, seo, metaType, date, images, slug, content }} = pageService.getPreviewHook(initialData)()
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
                      <Link href="/journal"><a className="block"><span className="inline-block transform rotate-180 -ml-1 mr-1 -translate-y-1">↳</span> Back to journal</a></Link>
                    </div>

                    <h1 className="expertise-title block px-4 md:px-6 xl:px-8 text-center pt-16 pb-8 md:pt-24 md:pb-16 xl:pt-32 xl:pb-24">{title}</h1>

                    <div className="w-full border-t border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 md:text-lg py-4 xl:py-5 justify-center md:justify-start">
                      <span className="block">{date}</span>
                      <span className="block px-4">&bull;</span>
                      <span className="block">{metaType}</span>
                      
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
                    <div className="w-full md:w-4/12 p-4 md:p-6 xl:p-8">
                     
                      <div className="md:text-lg w-10/12 md:w-11/12 xl:w-10/12 pb-12 md:pb-20 xl:pb-32">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
                      </div>
                    </div>

                      <div className="w-full md:w-8/12 border-b md:border-b-0 md:border-l border-black relative">
                        {images?.length > 0 && (
                          <>
                            {images.map(({ asset }, i) => {
                              return (
                                <div className={` mb-4 md:mb-6 xl:mb-8 pb-4 md:pb-6 xl:pb-8 px-4 md:px-6 xl:px-8 ${i !== images.length - 1 ? 'border-b border-black' : 'pb-0 md:pb-0 xl:pb-0' } ${i == 0 ? 'md:pt-6 xl:pt-8' : '' }`}>
                                  <img src={asset.url} className="w-full border border-black" key={i} />
                                </div>
                              )
                          })}
                          </>
                        )}
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
  const paths = await pageService.fetchPaths('journal')
  return {
    paths: paths,
    fallback: false,
  };
}