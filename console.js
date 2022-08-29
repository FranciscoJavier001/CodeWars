num = prompt("Ingrese un numero"); //** Asi solicito numeros */

function digitalize(num) { //** Funcion que va a recibir uno numeros del prompt */

    let arregloInicial = (num).split('') //** El arregloInicial es el numero que recibi y te lo separe por lugar */
 
    let arregloInvertido = [] //** Este va a ser un arreglo vacio */
    for (let i = arregloInicial.length -1; i >= 0; i-- ){ //** Desde el fin, hasta 0 y resta una */
        arregloInvertido[i] = parseFloat(arregloInicial.shift()) //** shift elimina el indice que metio */
    }
    return arregloInvertido.join("")
}

console.log(digitalize(num));

****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** 

function digitalize (num) {

    var arregloInicial = num.split("") //** Convierte los caracteres en independientes */

    var arregloInvertido = arregloInicial.reverse() //** Muevo el array de lugar */

    var joinArray= (arregloInvertido.join("")) //** Vuelvo a juntar como estaba */

    return joinArray //** Lo que regreso */
}

digitalize("a1 b2 123 asd");

_______________________________________________________________________________________________________________________________________________________________________

s = prompt("Ingresa los km por hora") //** Pedimos s */

const cockroachSpeed = (s) => { //** Funcion que recibe s */

    velocidadConstante = 27.777 //** Velocidad constante para la operacion */
    conversion = (velocidadConstante * s) //** Operacion de la conversion */

    return conversion //** Lo que retornamos */
}

console.log(cockroachSpeed(s)) //** Hacemos un llamado de la funcion */

****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** 

s = prompt("Ingresa los km por hora") //** Solicitamos s */

const cockroachSpeed = (s) => { //** Funcion que recibe s */
  conversion = (s*27.778) //** Operacion para la conversion */
  
  return (Math.floor(conversion)) //** Operacion que redondea */
}

console.log(cockroachSpeed(s)) //** Hacemos el llamado a la funcion */

________________________________________________________________________________________________________________________________________________________