// importaciones de otros elementos o secciones para la pagina principal
import MenuCelular from "./Ui/MenuCelular"
import Navbar from "./Ui/Navbar"
import { useState } from "react"


// estructura principal de la PiMagicWand, donde se pondran los elementos de las demas secciones
function App() {
  const[ isMenuOpen, setIsMenuOpen] = useState(false)
  return(
  <div className="text-3x1 font-bold underline">
    <Navbar isMenuOpen = {isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    <MenuCelular isMenuOpen = {isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
  </div>
)
  
}

export default App
