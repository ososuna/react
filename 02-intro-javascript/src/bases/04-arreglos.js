
// Arreglos en JS
// Arreglos de tamaño fijo (se pueden expandir)
// const arreglo = new Array( 100 );

const arreglo = [1,2,3,4];

// No es recomendable usar el push porque modifica el objeto principal
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);

// arreglo2.push( 5 );
let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( ( el ) => {
    return el * 2;
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
