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

s = prompt("Ingresa los km por hora")

function cockroachSpeed(s) {

    velocidadConstante = 27.777
    conversion = (velocidadConstante * s)

    return conversion
}

console.log(cockroachSpeed(s))

****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** 

s = prompt("Ingresa los km por hora")

const cockroachSpeed = (s) => {
  conversion = (s*27.778)
  
  return (Math.floor(conversion))
}

console.log(cockroachSpeed(s))

________________________________________________________________________________________________________________________________________________________

const doubleChar = (str) => {
    return [...str].map(xD => xD.repeat(2)).join('')
}

console.log(doubleChar("asD"));

________________________________________________________________________________________________________________________________________________________

const sumArray = (array) => {
    if (array.length < 2) {
        return 0
    } else {
        return array.reduce((total, valorActual) => total + valorActual) - 
        Math.min(...array) - Math.max(...array) //** Asi puedo saber cual es el valor minimo de cada array */
    }
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([6, 7, 8, 9, 0]));