import React, { useState } from 'react'

const MiPrimerComponente = ({nombre, saludo}) => {
    //Lógica de componente
    const [contador, setContador] = useState(0)
    const add=() =>{
        setContador(contador + 1)
    }
    const remove=() =>{
        setContador(contador -1)
    }
  return (
    //HTML que retorna
    <div 
        onClick={add}
        className='w-48 aspect-square bg-purple-600 text-white
        text-5xl'>
        {saludo} {nombre}, {contador}</div>
  )
}

export default MiPrimerComponente