import React, { useEffect, useState } from 'react'

export default function PantallaCarga({ onComplete }) {
    // Define un estado text, que se usará para mostrar letra por letra el mensaje
    const [text, setText] = useState("")
    // Esta es la cadena de texto que se va a mostrar letra por letra, imitando el efecto de máquina de escribir
    const fulltext = "Cargando Información"
    // funcion encargada de ejecutar cada 100ms una letra declarada en fulltext, por medio de un contador de caracter(dependiendo del largo del fulltext) ira escribiendo poco a poco la palabra
    // al finalizar, dejara pasar otros 100ms, cambiando el estado de onComplete de false a true para poder visualizar el contenido de la pagina
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index++;
            setText(fulltext.substring(0, index));
            if (index >= fulltext.length) {
                clearInterval(interval)
                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [onComplete])
    return (
        // barras de carga
        <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5'>
            <div className='w-[300px] h-[3px] bg-gray-800 rounder relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar'>
                </div>
            </div>
            {/* Texto a mostrar */}
            <div className='mb-4 text-3xl font-mono font-semibold'>
                {text}
                <span className='animate-blink ml-1 text-2x1 font-bold'>|</span>
            </div>
            {/* barras de carga */}
            <div className='w-[300px] h-[3px] bg-gray-800 rounder relative overflow-hidden'>
                <div className='w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar'>
                </div>
            </div>
        </div>
    )
}
