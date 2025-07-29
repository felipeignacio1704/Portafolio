// importaciones de otros elementos o secciones para la pagina principal
import PantallaCarga from "./Ui/PantallaCarga"
import MenuCelular from "./Ui/MenuCelular"
import Navbar from "./Ui/Navbar"
import QuienSoy from "./sections/QuienSoy"
import MyStack from './sections/MyStack'
import Projects from './sections/Projects'
import Animaciones from "./Ui/animaciones"
import { useState } from "react"

// estructura principal de la pagina, donde se pondran los elementos de las demas secciones
function App() {
  {/* controla desde el principio la pantalla de carga, estra sera false por lo que siempre se usara la pantalla de carga */ }
  const [isLoading, setIsLoading] = useState(false)
  {/* controla el navbar si esta en dispositivos moviles o en otras pantallas, empieza siempre en false */ }
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      {!isLoading && <PantallaCarga onComplete={() => setIsLoading(true)} />}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuCelular isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <QuienSoy />
      <Animaciones />
      <MyStack />
      <Projects />
    </>
  )

}

export default App
