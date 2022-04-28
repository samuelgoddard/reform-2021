import React from "react"
import Link from "next/link"
import FooterCta from "@/components/footerCta"

const Footer = ({ color, hideCta }) => {
  let colorClasses = `bg-black text-offwhite texture-overlay texture-overlay--dark `
  let colorBorderClasses = `border-offwhite `

  if (color === "white") {
    colorClasses = `bg-offwhite text-offblack texture-overlay `
    colorBorderClasses = `border-black `
  }

  return (
    <>
      { !hideCta ? (<FooterCta color={ color }/>) : (<></>)}

      <footer className={ colorClasses + colorBorderClasses + `border-t w-full `}>
        <div className="flex flex-wrap items-center">
          <a href="https://www.instagram.com/reform.architects/" target="_blank" rel="noopener noreferrer" className={ colorBorderClasses + `text-xs md:text-lg xl:text-xl uppercase font-medium block px-3 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r group`}>
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                <span className="block transform translate">Insta<span className="hidden md:inline">gram</span></span>
                <span className="hidden md:block">Insta<span className="hidden md:inline">gram</span></span>
              </span>
            </span>
          </a>

          <span className={ colorBorderClasses + `text-xs md:text-lg xl:text-xl uppercase font-medium px-3 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-r flex items-center`}>
            <span className="mr-1"><span className="hidden md:inline-block">Site</span> by</span>

            <a target="_blank" rel="noopener noreferrer" className="group leading-none flex" href="https://shiftwalk.studio">
            <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
              <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px xl:pt-px md:leading-tight">
                <span className="block transform translate">ShiftWalk</span>
                <span className="hidden md:block">ShiftWalk</span>
              </span>
            </span>
            </a>
          </span>
          {/* <span className="text-xs md:text-lg xl:text-xl uppercase font-medium px-3 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 mx-auto text-center hidden xl:block">
            Development done differently
          </span> */}
          <Link href="/privacy">
            <a className={ colorBorderClasses + `text-xs md:text-lg xl:text-xl uppercase font-medium block px-3 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 ml-auto border-l group`}>
              <span className="block overflow-hidden relative h-auto md:h-5 xl:h-6 md:my-3px">
                <span className="block transform md:group-hover:-translate-y-1/2 md:group-focus:-translate-y-1/2 transition duration-300 ease-in-out md:-mt-px md:leading-tight">
                  <span className="block transform translate">Privacy <span className="hidden md:inline">Policy</span></span>
                  <span className="hidden md:block">Privacy <span className="hidden md:inline">Policy</span></span>
                </span>
              </span>
            </a>
          </Link>
          <span className={ colorBorderClasses + `text-xs md:text-lg xl:text-xl uppercase font-medium block px-3 md:px-6 xl:px-8 py-4 md:py-5 xl:py-6 border-l`}>
            &copy;2021
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
