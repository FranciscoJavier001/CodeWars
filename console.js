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
