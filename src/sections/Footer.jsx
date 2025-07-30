import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// apartado footer con el fin de mostrar el contenido final del portafolio y redireccionar a los sitios de interes
function Footer() {
    return (
        <footer>
            <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
                <div className="flex gap-10 p-4 justify-center text-white">
                    <a href="https://github.com/FelipeNaranjoL" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-naranjo-l%C3%B3pez-09a0a9224/" className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white" target="_blank">
                        <FaLinkedin />
                    </a>
                </div>
                <p>@ 2025 Felipe Naranjo Derechos registrados</p>
            </div>
        </footer>
    )
}

export default Footer;