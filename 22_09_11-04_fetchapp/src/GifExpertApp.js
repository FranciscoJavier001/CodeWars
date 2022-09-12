import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //** uS necesita un estado actual, que el 3, despues ocupa un nuevo estado y mostrar nuevo estado */
    const [categories, setCategories] = useState(['Death Note'])

  return (
    <>
    <h2>XXX1</h2>
    <AddCategory setCategories={setCategories} />
    <hr/>

    <ol>
        {
            categories.map(category => (
                <GifGrid
                key={category}
                category={category}
                />
            ))
        }
    </ol>
    </>
  )
}