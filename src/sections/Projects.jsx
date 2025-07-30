import React, { useState } from 'react'
import TuristikApp from '../assets/Projects/TuristikApp.png'
import RevealOnScreoll from '../Ui/RevealOnScroll'

export default function Projects() {
    // lista de projectos en los cuales he trabajado, incluyendo el titulo, descripcion y foto
    const [projects] = useState([
        {
            image: TuristikApp,
            name: "TuristikApp",
            brief: "Aplicacion web enfocada a ayudar a las personas con algun problema visual o de atencion, brindando diferentes metodos de accesibilidad"
        },
        {
            image: TuristikApp,
            name: "Test2",
            brief: "Aplicacion web enfocada a ayudar a las personas con algun problema visual o de atencion, brindando diferentes metodos de accesibilidad"
        },

    ])
    return (
        <section name="Projects" className='min-h-screen flex items-center font-mono justify-center py-20'>
            <RevealOnScreoll>
                {/* titulo */}
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
                        Projects
                    </h2>
                    {/* contenedor principal */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {projects.map((project, index) => (
                            <div key={index} className='p-6 rounded-xl flex flex-col items-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900'>
                                {/* titulo y descripcion del projecto */}
                                <h3 className='font-semibold text-xl mb-4'>{project.name}</h3>
                                <p className='text-gray-300 mb-4 text-center'>{project.brief}</p>
                                {/* listado de tecnologias aplicadas en cada proyecto, DEBES CAMBIARLO DEPENDIENDO DEL PROYECTO YA QUE NO ME
                            AGRADO DEL TODO SU IMPLEMENTACION */}
                                <div className='flex flex-wrap sm:items-center gap-2 mb-4'>
                                    {["Python 1", "Python 2", "Python 3"].map((tech, index) => (
                                        <span key={index} className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] transition'>{tech}</span>
                                    ))}
                                    {/* contenedor de imagen y url */}
                                    <div className='flex flex-col items-center text-center my-5 py-3 gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] cursor-pointer rounded-xl w-full'>
                                        <p className='text-gray-200'>Ver proyecto</p>
                                        {/* url, idealmente que lleve al gitbuh del proyecto como tal, este debe estar bien explicado, detallado y obviamente, subido */}
                                        <a href="#" className='w-full flex justify-center items-center'>
                                            <img
                                                src={project.image}
                                                alt={`${project.name} imagen`}
                                                className='w-50  object-cover rounded-lg'
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScreoll>
        </section>
    )
}
