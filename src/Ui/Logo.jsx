import React from 'react'
// estructura principal de la logo, tiene como funcion mostrar mi nombre con efectos de tailwind
export default function Logo() {
  return (
    <div>
      <a href="#QuienSoy" className='font-mono text-xl font-bold text-white'>
        <span className='bg-gradient-to-r ml-2 from-teal-400 via-blue to-indigo-600 bg-clip-text text-transparent'>Felipe Naranjo</span>
      </a>
    </div>
  )
}
