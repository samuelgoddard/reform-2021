import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/header'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo {...SEO} />

      {/* <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 texture-overlay z-0 pointer-events-none"></div> */}

      <Header noLogo={ router.pathname === '/' ? true : false }/>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}