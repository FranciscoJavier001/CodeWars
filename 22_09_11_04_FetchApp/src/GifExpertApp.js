import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //** uS necesita un estado actual, que el 3, despues ocupa un nuevo estado y mostrar nuevo estado */
    const [categories, setCategories] = useState(['']) //** Estado, Estado Actualizado, Estado Inicial */

  return (
    <>
    <h2 id="GEA-h2">Images</h2> {/* Texto, tiene algo de estilos */}
    <AddCategory setCategories={setCategories} /> {/* Componente que renderizo, con esos parametros actualizados */}


    <ol> {/* Muestra una lista ordenada */}
        {
            categories.map(category => ( //** Mapea el categories, con u nuevo arreglo */
                <GifGrid //** Renderiza este componente */
                key={category} //** Key=Para elementos de lista, para mantener los estados(propiedades), key es para elementos unicos */
                category={category} //** Para mostrar la categoria de la cual se hizo la busqueda */
                />
            ))
        }
    </ol>
    </>
  )
}