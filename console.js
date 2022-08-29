// num = prompt("Ingrese un numero"); //** Asi solicito numeros */

// function digitalize(num) { //** Funcion que va a recibir uno numeros del prompt */

//     let arregloInicial = (num).split('') //** El arregloInicial es el numero que recibi y te lo separe por lugar */
 
//     let arregloInvertido = [] //** Este va a ser un arreglo vacio */
//     for (let i = arregloInicial.length -1; i >= 0; i-- ){ //** Desde el fin, hasta 0 y resta una */
//         arregloInvertido[i] = parseFloat(arregloInicial.shift()) //** shift elimina el indice que metio */
//     }
//     return arregloInvertido.join("")
// }

// console.log(digitalize(num));

// ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******

// function digitalize (num) {

//     var arregloInicial = num //** Convierte los caracteres en independientes */

//     var arregloInvertido = arregloInicial.reverse() //** Muevo el array de lugar */

//     var joinArray= (arregloInvertido.join("")) //** Vuelvo a juntar como estaba */

//     return joinArray //** Lo que regreso */
// }

// digitalize("a1 b2 123 asd");

________________________________________________________________________________________________________________________________________________________________

// s = prompt("Ingresa los km por hora") //** Pedimos s */

// const cockroachSpeed = (s) => { //** Funcion que recibe s */

//     velocidadConstante = 27.777 //** Velocidad constante para la operacion */
//     conversion = (velocidadConstante * s) //** Operacion de la conversion */

//     return conversion //** Lo que retornamos */
// }

// console.log(cockroachSpeed(s)) //** Hacemos un llamado de la funcion */

// ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ****** ******

// s = prompt("Ingresa los km por hora") //** Solicitamos s */

// const cockroachSpeed = (s) => { //** Funcion que recibe s */
//   conversion = (s*27.778) //** Operacion para la conversion */
  
//   return (Math.floor(conversion)) //** Operacion que redondea */
// }

// console.log(cockroachSpeed(s)) //** Hacemos el llamado a la funcion */

________________________________________________________________________________________________________________________________________________________________

// const doubleChar = (str) => { //** FF que recibe str */
//     return [...str] //** Regresame como un arreglo ese string */
//     .map(xD => xD.repeat(2)).join('') //** Metodo map, donde se recibe, y se va a repetir 2 veces y se unen los espacios */
// }

// console.log(doubleChar("asD")); //** Ejecutamos la funcion */

________________________________________________________________________________________________________________________________________________________________

// const sumArray = (nums) => { //** FF que recibe nums */
//     if (nums.length <= 2) { //** Si es menos a 0 simplemente regresa 0 */
//         return 0
//     } else { //** Pero si es diferente */
//         return nums
//         .reduce((total, valorActual) => total + valorActual) - //** Metodo que devuelve un valor global, ocupa total y vA despues de FF se reciben ahi */
//         Math.min(...nums) - Math.max(...nums) //** Busca el minumo y el maximo y los resta */
//     }
// }

// console.log(sumArray([6, 10]));
// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(sumArray([6, 7, 8, 9, 0]));

________________________________________________________________________________________________________________________________________________________________

function rentalCarCost(d) {
    // Your solution here

    costoFinal= 0 //** Declaro las variables */
    costoDiario = 40

    if(d >= 1 && d <= 2) { //** Hago las opera operaciones */
        costoFinal = costoDiario*d
        return costoFinal
    }
    else if (d >= 3 && d <= 6){
        costoFinal = costoDiario*d-20
        return costoFinal
    }
    else if (d >= 7){
        costoFinal = costoDiario*d-50
        return costoFinal
    } else {
        return "No hay Datos"
    }
  } 

console.log(rentalCarCost(2))
console.log(rentalCarCost(3))
console.log(rentalCarCost(7))