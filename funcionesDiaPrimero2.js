//funcion que retorne el cuadrado de un numero

function cuadrado(x) {
    return Math.pow(x, 2);
}

const numCuadrado = cuadrado(5);
console.log(numCuadrado);

//funcion que reciba como parametro un numero y que retorne un numero
// aleatorio entre el cero y ese numero;


function aleatoria(y) {

    return Math.floor(Math.random() * (y - 0)) + 0;
    // return Math.random() * (y - 0) + 0;
}

const numAleatorio = aleatoria(5);
console.log(numAleatorio);

//funcion compose que reciba dos funciones que resiba dos funciones 
//funcion a y b  como parametros





function compose(a, b) {
    function retorna(x) {
        return a(b(x))
    };
    return retorna
}

//invocar a la funcion compose para que de como resultado una funcion que devuelva un numero que sera 
//el cuadrado de un valor entre 0 y el parametro x

console.log(compose(cuadrado, aleatoria)(5));