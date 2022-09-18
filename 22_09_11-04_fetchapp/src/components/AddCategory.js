import React, { useState } from 'react'
import PropTypes from 'prop-types'; //** npm install --save prop-types */

//** Propiedades que estamos recibiendo en esta funcion */
// export const AddCategory = ({setCategories}) => { //** Para ver que objetos trae el AddCaegory */
export const AddCategory = (props) => { //** Para ver que objetos trae el AddCaegory */
    // console.log(props); //** Para mostrar en consola las funciones que trae o sus estados, se pueden ver en consola/componentes */

    const [inputValue, setInputValue] = useState('') //** Esto es del Form o Input donde escribimos la busqueda */

    const handleInputChange = (e) => { //** Variable cuando cambia algo en la caja de texto de la busqueds, recibe el evento */
        setInputValue(e.target.value) //** Va poniendo lo que se esta escribiendo en el campo */
    }

    const handleSubmit = (e) => { //** Cuando damos enter, recibimos evento */
        e.preventDefault() //** Evitamos mas de 1 recarga accidental */

        if(inputValue.trim().length > 0) { //** Pero una condicional, para evitar perder el tiempo */
            //** Esto viene de las props, linea 6 - setCategories crea un nuevo arreglo, funcion flecha y variables del campo */
            props.setCategories(newSearch => [inputValue, ...newSearch])  //** Muestra el estado actual, y cuando cambia manda todo del nuevo */
            setInputValue('') //** Despues de hacer la busqueda deja el campo en blanco */
        }
    }

  return (
    <form onSubmit={handleSubmit}> {/* Formulario, funcion"Enter", lanzamos esa funcion */}
        <input //** Lo que va en el campo de texto */
        type="text" //** Tipo que viene */
        placeholder='Type your Search'
        value={inputValue} //** Se lanza limpio */
        onChange={handleInputChange} //** Cuando cambia el texto se lanza esta funcion para no recargarse hasta Enter */
        />
    </form>
  )
}

//** Esto parece opcional */
AddCategory.prototype = { //** Asi vemos la propiedad que estamos pidiendo */
    setCategories: PropTypes.func.isRequired //** Solicitamos que sea requerida */
}