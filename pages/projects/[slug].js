import { useRef, useState } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Link from 'next/link'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NumberShape from '@/components/numberShape'
import { useRouter } from 'next/router'
import ImageWrapper from '@/components/image-wrapper'
import BlockContent from '@sanity/block-content-to-react'

const query = `*[_type == "projects" && slug.current == $slug][0]{
  seo {
    ...,
    shareGraphic {
      asset->
    }
  },
  _rev,
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
  },
  'next': *[_rev > ^._rev] | order(_rev asc)[0] {
    title,
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Project(initialData) {
  const { data: { title, seo, year, images, expertises, slug, location, description, next }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const router = useRouter()
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

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
                className="relative z-[100]"
              >
                <div className="overflow-hidden">
                  <m.div variants={fade} className="bg-offwhitelight pt-12 md:pt-16 xl:pt-20 border-b border-black mb-5 md:mb-0">
                    <div className="w-full border-b border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 md:text-lg pt-6 pb-4 xl:pt-6 xl:pb-5 justify-center md:justify-start">
                    <Link href="/projects"><a className="flex items-center group"><span className="inline-block transform rotate-180 -ml-1 mr-1 -translate-y-1">↳</span> 
                      
                      <span className="overflow-hidden relative h-auto md:h-5 xl:h-6 ml-auto block">
                        <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px xl:pt-px md:leading-tight">
                          <span className="block transform translate">Back to projects</span>
                          <span className="hidden md:block">Back to projects</span>
                        </span>
                      </span>
                      
                      </a></Link>
                    </div>

                    <h1 className="expertise-title block px-4 md:px-6 xl:px-8 text-center pt-16 pb-8 md:pt-24 md:pb-16 xl:pt-32 xl:pb-24">{title}</h1>

                    <div className="w-full border-t border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 md:text-lg py-4 xl:py-5 justify-center md:justify-start">
                      <span className="block">{year}</span>
                      <span className="block px-4">&bull;</span>
                      <span className="block">{location}</span>
                      <span className="block px-4">&bull;</span>
                      <span className="block">{expertises.title}</span>
                      
                      { copied ? (
                        <span className="ml-auto hidden md:block focus:border-none" onClick={copy}>Link Copied</span>  
                      ) : (
                        <button className="group overflow-hidden relative h-auto md:h-5 xl:h-6 ml-auto hidden md:block focus:border-none" onClick={copy}>
                          <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px xl:pt-px md:leading-tight">
                            <span className="block transform translate">Copy Link</span>
                            <span className="hidden md:block">Copy Link</span>
                          </span>
                        </button>
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
                  <m.div variants={fade} className="relative z-50 bg-offwhite flex flex-wrap">
                    <div className="w-full md:w-8/12 border-b md:border-b-0 md:border-r border-black relative">
                      {images.map(({ asset }, i) => {
                        return (
                          <div key={i} className={` mb-4 md:mb-6 xl:mb-8 pb-4 md:pb-6 xl:pb-8 px-4 md:px-6 xl:px-8 ${i !== images.length - 1 ? 'border-b border-black' : 'pb-0 md:pb-0 xl:pb-0' } ${i == 0 ? 'md:pt-6 xl:pt-8' : '' }`}>

                            <ImageWrapper
                              image={asset}
                              className="w-full border border-black will-change"
                              baseWidth={1300}
                              baseHeight={880}
                            />
                          </div>
                        )
                      })}
                    </div>
                    <div className="w-full md:w-4/12 p-4 pt-20 pb-8 md:p-12 md:pt-32 xl:p-16 xl:pt-48" data-scroll data-scroll-speed="-0.5">
                      <div className="mb-4">
                        <NumberShape number="R" />
                      </div>

                      <div className="md:text-lg xl:text-xl w-10/12 md:w-11/12 xl:w-10/12 content">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={description} />
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
                  <m.div variants={fade} className="relative z-50">

                    {/* { next?.slug?.current && (
                      <Link href={next.slug.current}>
                        <a className="w-full border-t border-black flex flex-wrap items-center px-4 md:px-6 xl:px-8 text-xl md:text-2xl xl:text-3xl py-6 xl:py-8 justify-center bg-offwhitelight">
                          <span className="block">Next Project: {next.title}</span>
                        </a>
                      </Link>
                    )} */}

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