import React from "react"
import Link from "next/link"

const FooterCta = ({ color }) => {
  let colorClasses = `bg-black text-offwhite `
  let colorBorderClasses = `border-offwhite `

  if (color === "white") {
    colorClasses = `bg-offwhite text-offblack `
    colorBorderClasses = `border-offblack `
  }
  
  return (
    <div className={ colorClasses + `texture-overlay texture-overlay--dark relative overflow-hidden` }>
      <div className="bg-gradient-to-b w-full h-84 block from-black to-transparent absolute top-0 left-0 right-0 z-10 opacity-100"></div>

      <div className="bg-gradient-to-t w-full h-64 block from-black via-black to-transparent absolute bottom-0 left-0 right-0 z-10 opacity-75"></div>

      <div className="absolute inset-0 opacity-20 z-0" data-scroll data-scroll-speed="-0.75">
        <img src="/images/footer.webp" alt="Footer Image" className="opacity-50 object-cover object-center w-full h-full will-change" />
      </div>

      <div className="container relative z-20">
        <div className="flex items-center justify-center h-screen max-h-90screen">
          <div className="w-full text-center -mt-12 md:-mt-16">
            <div className="w-4 relative mx-auto mb-8 md:mb-12">
              <div className="w-px h-12 md:h-16"></div>
              <div className="w-3 h-3 -ml-1 rounded-full absolute bottom-0 left-0"></div>
            </div>
            <div className="scrollreveal">
              <h2 className="footer-title max-w-4xl mx-auto mb-8 md:mb-12 textreveal">Looking for a <span className="italic">partner</span> for your next development?</h2>
            </div>

            <div className="scrollreveal">
              <Link href="/contact">
                <a className={ colorBorderClasses + `textreveal text-base md:text-lg xl:text-xl uppercase text-center inline-block mx-auto font-medium border-b-2 group`}>
                  <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                    <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                      <span className="block transform translate">Get In Touch</span>
                      <span className="hidden md:block">Get In Touch</span>
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCta
