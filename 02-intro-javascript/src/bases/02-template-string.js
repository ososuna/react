
const nombre = 'Oswaldo';
const apellido = 'Osuna';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${ nombre }
${ apellido }
${ 1 + 2 }`;

console.log( nombreCompleto );

const getSaludo = ( nombre ) => {
    return 'Hola, ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }` );
