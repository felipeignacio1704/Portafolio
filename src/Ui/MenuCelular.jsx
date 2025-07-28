import React from 'react'
import { ImCross } from "react-icons/im";

export default function MenuCelular({ isMenuOpen, setIsMenuOpen }) {
  return (
    // si isMenuOpen es true, mostrara el contenido de hamburguesa para celulares, se podra ver o ocultar dependiendo de la necesidad del usuario
    <div className={` fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto" :
      "h-0 opacity-0 pointer-events-none"}`}>
      {/* boton para cerrar el menu */}
      <button onClick={() => setIsMenuOpen(false)} className='absolute top-5 right-7 text2x1 focus:outline-none cursor-pointer'
        aria-label='Cerrar Menu'>
        <ImCross className='text-white' />
      </button>
      {/* navegadores */}
      <a onClick={() => setIsMenuOpen(false)} href="#QuienSoy" className={` text-2x1 font semibold text-white my-4 transform transition-transform duration-300  ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Quien Soy</a>
      <a onClick={() => setIsMenuOpen(false)} href="#MyStack" className={` text-2x1 font semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Tecnologias</a>
      <a onClick={() => setIsMenuOpen(false)} href="#Projects" className={` text-2x1 font semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Proyectos</a>
      <a onClick={() => setIsMenuOpen(false)} href="#Contact" className={` text-2x1 font semibold text-white my-4 transform transition-transform duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contato</a>

    </div>
  )
}
