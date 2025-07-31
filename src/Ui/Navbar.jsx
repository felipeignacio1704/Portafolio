// importaciones de otros elementos o secciones para Navbar
import { useEffect } from 'react';
import Logo from './Logo'
import { MdMenu } from "react-icons/md";
import { Link } from 'react-scroll';



// isMenuOpen: Booleano que indica si el menú está abierto.

// setIsMenuOpen: Función para cambiar el estado de isMenuOpen.

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  // funcion para evitar que el usuario haga scroll cuando el menú está abierto.
  useEffect(() => { document.body.style.overflow = isMenuOpen ? "hidden" : ""; }, [isMenuOpen]);
  return (
    // propiedades del navbar
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />
          {/* Se muestra solo si isMenuOpen es false.
          Al hacer clic, invierte el valor de isMenuOpen usando la función setIsMenuOpen.
          md:hidden: Este botón se oculta en pantallas medianas o más grandes (solo visible en celular). */}
          {!isMenuOpen && <div onClick={() => setIsMenuOpen((prev) => !prev)} className="text-2x1 absolute right-7 z-40 md:hidden cursor-pointer font-mono text-white">
            <MdMenu />
          </div>}
          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {/* navegadores */}
              {/* {se opto por una libreria especializada en navigacion, con el fin de hacer un desplazamiento mas suave y agradable} */}
              <Link
                to="QuienSoy"
                smooth={true}
                offset={-80}  // compensa el alto del navbar
                duration={500} // duración del scroll (ms)
                className='text-gray-50 hover:text-xl hover:text-white transition-all cursor-pointer'
              >
                Quién soy
              </Link>

              <Link
                to="MyStack"
                smooth={true}
                offset={-80}  // compensa el alto del navbar
                duration={500} // duración del scroll (ms)
                className='text-gray-50 hover:text-xl hover:text-white transition-all cursor-pointer'
              >
                Tecnologías
              </Link>
              <Link
                to="Projects"
                smooth={true}
                offset={-80}  // compensa el alto del navbar
                duration={500} // duración del scroll (ms)
                className='text-gray-50 hover:text-xl hover:text-white transition-all cursor-pointer'
              >
                Projectos
              </Link>
              <Link
                to="Contact"
                smooth={true}
                offset={-80}  // compensa el alto del navbar
                duration={500} // duración del scroll (ms)
                className='text-gray-50 hover:text-xl hover:text-white transition-all cursor-pointer'
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}
