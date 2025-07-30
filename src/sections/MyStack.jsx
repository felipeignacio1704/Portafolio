import React from 'react'
import RevealOnScreoll from '../Ui/RevealOnScroll'

export default function MyStack() {
    // listado de skills de felipe naranjo las cuales apareceran mas abajo
    const skills = [
        "SQL", "Power Bi", "Python", "Excel", "Wordpress", "Html", "Css", "Js",
        "React"
    ]
    return (
        <section name="MyStack" className='min-h-screen font-mono flex items-center justify-center py-20'>
            <RevealOnScreoll>
                {/* titulo */}
                <div className='max-w-3xl mx-auto px-4'>
                    <h2 className='max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center'>
                        Hola mundo
                    </h2>
                    {/* parrafo descriptivo sobre mis habilidades/talentos */}
                    <div className='p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all'>
                        <p className='text-gray-300 mb-5 text-xl'>
                            {" "}
                            Escribir informacion sobre mi {" "}
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* lista de habilidades */}
                        <div className='rounded-xl p-6 hover:-translate-y-1 transition-all '>
                            <h3 className='text-2xl text-center font-bold mb-8 text-gray-300'>💻 Habilidades </h3>
                            <div className='flex justify-center flex-wrap gap-2'>
                                {skills.map((skill, index) =>
                                    <span className='bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] transition' key={index}>{skill}
                                    </span>)}
                            </div>
                        </div>
                        {/* historial de educacion */}
                        <div className='p-6 hover:-translate-y-1 transition-all'>
                            <h3 className='text-2xl text-center font-bold mb-8 text-gray-300'>
                                📚Educacion
                            </h3>
                            <ul className='pl-5 list-disc list-inside text-lh text-gray-300'>
                                <li>
                                    <strong>
                                        {" "}
                                        <em>universidad/escuela</em>{" "}
                                    </strong>
                                </li>
                                <li>
                                    Certificados y cosas asi
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* historial de experiencia laboral */}
                    <div className='p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-2xl text-center font-bold mb-8 text-gray-300'>
                            💼Experiencia laboral
                        </h3>
                        <ul className='pl-5 list-disc list-inside text-lg text-gray-300'>
                            <li>
                                <strong className='text-blue-400'>
                                    {" "}
                                    <em>Cargo y modo de trabajo</em>{" "}
                                </strong>
                                <br />* Modalidad y fecha <br />
                                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero! <br /> - Lorem ipsum dolor sit amet. <br />
                            </li>
                            <li>
                                Certificados y cosas asi...
                            </li>
                        </ul>
                    </div>
                </div>
            </RevealOnScreoll>
        </section>
    )
}
