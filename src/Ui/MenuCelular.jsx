import React from 'react';
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';


// Componente funcional que recibe props: si el menú está abierto y función para cerrarlo
export default function MenuCelular({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className={`fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
      {/* Botón de cerrar menú (ícono X) */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className='absolute top-5 right-7 text2x1 focus:outline-none cursor-pointer'
        aria-label='Cerrar Menu'
      >
        <ImCross className='text-white' />
      </button>
      {/* Enlaces*/}
      <Link
        to="QuienSoy"
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 cursor-pointer ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Quién Soy
      </Link>
      {/* Enlaces*/}
      <Link
        to="MyStack"
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 cursor-pointer ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Tecnologías
      </Link>
      {/* Enlaces*/}
      <Link
        to="Projects"
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 cursor-pointer ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Proyectos
      </Link>
      {/* Enlaces*/}
      <Link
        to="Contact"
        smooth={true}
        offset={-80}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 cursor-pointer ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        Contacto
      </Link>
    </div>
  );
}
