
// Funciones
const saludar1 = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

const saludar4 = () => 'Hola, Mundo';
// saludar = 20;

console.log( saludar1( 'Zenitsu' ) );
console.log( saludar2( 'Muichirou' ) );
console.log( saludar3( 'Shinobu' ) );
console.log( saludar4() );

const getUser = () => ({
        uid: '123ABC',
        username: 'El_Papi1308'
});

const user = getUser();
console.log( user );

// Tarea
function getUsarioActivo( nombre ) {
    return {
        uid: '11234AF',
        username: nombre
    }
}

const getUsarioActivo2 = ( nombre ) => ({
    uid: '11234AF',
    username: nombre
});

const usuarioActivo = getUsarioActivo2( 'Nezuko' );
console.log( usuarioActivo );
