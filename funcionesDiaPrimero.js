//funcion a que tan solo escribas 'hola desde a' por la consola

function a() {
    console.log('hola desde a');
}

//funcion b que escriba desde conbsola 'hola desde b'.

function b() {
    console.log('hola desde b');
}

a();
b();

//funcion main que resiba como parametro una funcion= funki.Que escriba por consola :
//'hola desde main' y luego llame  la funcion que resiba como parametro.


function main(funki) {
    console.log('hola desde main');

    funki();
}

main(b);