import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import ImageWrapper from '@/components/image-wrapper'
import ConditionalWrap from 'conditional-wrap';

const query = `{
  "journal": *[_type == "journal"] | order(date desc){
    title,
    date,
    content,
    metaType,
    images[] {
      asset->
    },
    externalUrl,
    layout,
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Journals(initialData) {
  const { data: { journal }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Journal" />
      
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
                <m.div variants={fade} className="bg-offwhitelight pt-40 md:pt-40 md:pb-16 xl:pt-48 xl:pb-20 px-4 md:px-6 xl:px-8 border-b border-black">
                    <h1 className="expertise-title text-center">Journal</h1>
                    
                    {/* <p className="max-w-xl xl:text-xl">Our expertise in this area represents a key un-locker of value and underpins the business. Reform has its own, in-house, fully functioning architectural practice and can provide a full range.</p> */}
                  </m.div>
                </div>

                <m.div variants={fade} className="bg-offwhitelight flex flex-wrap border-b border-black">
                  {journal.map(({ title, images, slug, date, metaType, externalUrl, layout }, i) => {
                    let d = new Date(date);
                    let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
                    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
                    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

                    let isExternal = null
                    let imageWidth = 900
                    let imageHeight = 900
                    let imageClass = 'w-full'

                    if (externalUrl) {
                      isExternal = false
                    } else {
                      isExternal = true
                    }

                    if (layout == 'square') {
                      imageWidth = 900
                      imageHeight = 900
                    } else if (layout == 'portrait') {
                      imageWidth = 640
                      imageHeight = 900
                      imageClass = 'w-1/2'
                    } else if (layout == 'small-square') {
                      imageWidth = 640
                      imageHeight = 640
                      imageClass = 'w-1/3 mb-16 md:mb-24 xl:mb-32'
                    } else {
                      imageWidth = 900
                      imageHeight = 550
                    }

                    return (
                      <ConditionalWrap
                        condition={!!isExternal}
                        key={i}
                        wrap={children => (
                          <Link href={`/journal/${slug.current}`}>
                            {children}
                          </Link>
                        )}
                      >
                        <a
                          className={`w-full border-b md:border-r border-black p-4 pt-5 pb-8 md:p-6 xl:p-8 group md:w-1/3 flex flex-wrap`}
                          { ...( !isExternal && { href: externalUrl } ) }
                          { ...( !isExternal && { target: '_blank' } ) }
                          { ...( !isExternal && { rel: 'noopener noreferrer' } ) }
                        >
                          <div className="w-full block">
                            <span className="block text-base font-medium">{`${da}.${mo}.${ye}`}</span>
                            <span className="block text-sm italic mb-6">{metaType}</span>
                            { images?.length > 0 && (
                              <div className={`block mb-auto ${imageClass}`}>
                                <ImageWrapper
                                  image={images[0].asset}
                                  className="w-full grayscale opacity-80 mb-4 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:grayscale-0 will-change"
                                  baseWidth={imageWidth}
                                  baseHeight={imageHeight}
                                />
                              </div>
                            )}
                          </div>

                          <div className="block w-full mt-auto">
                            <span className="block text-xl md:text-xl lg:text-2xl xl:text-3xl"> {title}</span>
                          </div>
                        </a>
                      </ConditionalWrap>
                    )
                  })}
                </m.div>
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
    props: props
  }
}