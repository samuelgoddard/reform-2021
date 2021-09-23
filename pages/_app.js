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

      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 bg-opacity-100 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

      <Header noLogo={ router.pathname === '/' ? true : false }/>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </>
  )
}