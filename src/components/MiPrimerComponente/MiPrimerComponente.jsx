import React, { useState } from 'react'

const MiPrimerComponente = ({nombre, saludo}) => {
    //Lógica de componente
    const [contador, setContador] = useState(0)
  return (
    //HTML que retorna
    <div className='w-48 aspect-square bg-purple-600 text-white
    text-5xl'>
        {saludo} {nombre}, {contador}</div>
  )
}

export default MiPrimerComponente