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

const query = `{
  "projects": *[_type == "projects"]{
    title,
    year,
    images[] {
      asset->
    },
    expertises-> {
      title
    },
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Projects(initialData) {
  const { data: { projects }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Projects" />
      
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
                  <m.div variants={fade} className="bg-offwhitelight pt-40 md:pt-56 xl:pt-72 pb-6 xl:pb-8 px-4 md:px-6 xl:px-8 border-b border-black">
                    <h1 className="expertise-title">Projects</h1>
                    
                    <p className="max-w-xl xl:text-xl">Our expertise in this area represents a key un-locker of value and underpins the business. Reform has its own, in-house, fully functioning architectural practice and can provide a full range.</p>
                  </m.div>
                </div>

                <m.div variants={fade} className="bg-offwhitelight flex flex-wrap border-b border-black">
                  {projects.map(({ title, images, slug, expertises, year }, i) => {
                    return (
                      <Link href={`/projects/${slug.current}`} key={i}>
                        <a className={`w-full border-b md:border-r border-black p-4 pt-5 pb-8 md:p-6 xl:p-8 block group md:w-1/3`}>

                          <ImageWrapper
                            image={images[0].asset}
                            className="w-full border  grayscale opacity-80 mb-4 transition-all ease-in-out duration-500 group-hover:opacity-100 group-hover:grayscale-0 will-change"
                            baseWidth={900}
                            baseHeight={600}
                          />

                          <span className="block text-lg md:text-xl xl:text-2xl">{title}</span>
                          <span className="block text-sm italic">{expertises.title}</span>
                          <span className="block text-sm italic">{year}</span>
                        </a>
                      </Link>
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