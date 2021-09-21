import React from "react"

const NumberShape = ({ number, white }) => (
  <div className={`flex flex-wrap relative items-center justify-center w-10 md:w-12 mr-2 mb-2 ${white ? 'text-offwhite' : 'text-offblack'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute top-0 left-0" viewBox="0 0 39.583 46.528"><path data-name="Path 14" d="M6.204 45.551a9.04 9.04 0 01-3.506-2.731 12.139 12.139 0 01-2.023-4.113 18.871 18.871 0 01-.674-5.192 27.787 27.787 0 011.045-7.283 39.473 39.473 0 012.933-7.553 45.129 45.129 0 014.518-7.114A36.374 36.374 0 0114.262 5.6a27.663 27.663 0 016.71-4.08A18.638 18.638 0 0128.322 0a12.09 12.09 0 015.091.978 9.1 9.1 0 013.473 2.731 12.125 12.125 0 012.027 4.114 18.836 18.836 0 01.675 5.192 27.758 27.758 0 01-1.05 7.285 39.383 39.383 0 01-2.933 7.552 45.178 45.178 0 01-4.518 7.114 36.409 36.409 0 01-5.765 5.968 27.663 27.663 0 01-6.709 4.08 18.649 18.649 0 01-7.35 1.517 12.158 12.158 0 01-5.059-.98z" fill="currentColor"/></svg>
    
    <span className={`text-xl md:text-2xl xl:text-3xl italic block relative z-10 p-3 lg:p-5 ${white ? 'text-black' : 'text-offwhite'}`}>{ number }</span>
  </div>
)

export default NumberShape