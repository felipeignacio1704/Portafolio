import React, { useState } from 'react'
import TuristikApp from '../assets/Projects/TuristikApp.png'
import BancoQR from '../assets/Projects/BancoQR.png'
import ServiExpress from '../assets/Projects/ServiExpress.png'
import RevealOnScroll from '../Ui/RevealOnScroll'

export default function Projects() {
    const [projects] = useState([
        {
            image: TuristikApp,
            name: "TuristikApp",
            brief: "Aplicación web enfocada en ayudar a personas con algún problema visual o de atención, brindando diferentes métodos de accesibilidad",
            tech: ["React", "Firebase", "Node.js", "Tailwind 3", "TS", "Gemini"],
            link: "https://github.com/FelipeNaranjoL/TuristikApp"
        },
        {
            image: BancoQR,
            name: "BancoQR",
            brief: "Proyecto orientado a ofrecer alternativas de pago a estudiantes de educación superior sin depender de una tarjeta física.",
            tech: ["Flutter/Dart"],
            link: "https://github.com/FelipeNaranjoL/flutter_app_bancoestado"
        },
        {
            image: ServiExpress,
            name: "ServiExpress",
            brief: "Plataforma web para la gestión de servicios mecánicos, que facilita la conexión entre clientes y proveedores.",
            tech: ["HTML", "CSS", "Python/Django", "MySQL"],
            link: "https://github.com/FelipeNaranjoL/ServiExpress_"
        }
    ])

    return (
        <section name="Projects" className='min-h-screen flex items-center font-serif justify-center py-20'>
            <RevealOnScroll>
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
                        Proyectos
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className='p-6 rounded-xl flex flex-col items-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900'
                            >
                                <h3 className='font-semibold text-xl mb-4'>{project.name}</h3>
                                <p className='text-gray-300 mb-4 text-center'>{project.brief}</p>

                                {/* Tecnologías */}
                                <div className='flex flex-wrap justify-center items-center gap-2 mb-4'>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] transition'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                                {/* Imagen y enlace al repositorio */}
                                <div className='flex flex-col items-center text-center my-5 py-3 gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] cursor-pointer rounded-xl w-full'>
                                    <p className='text-gray-200'>Ver proyecto</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-full flex justify-center items-center'
                                    >
                                        <img
                                            src={project.image}
                                            alt={`${project.name} imagen`}
                                            className='w-50 object-cover rounded-lg'
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
