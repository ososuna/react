
const persona = {
    nombre: 'Zenitsu',
    apellido: 'Agatsuma',
    edad: 16,
    direccion: {
        ciudad: 'Tokio',
        zip: 123456,
        lat: 11.5754564,
        lng: 78.002312
    }
};

// console.log({
//     persona: persona
// }); 
// console.log({
//     persona
// }); 

// console.table( persona );
console.log( persona );

// Copiar la referencia
const persona2 = persona;
persona2.nombre = 'Muichirou';
console.log( persona2 );
console.log( persona );

// Clonar objeto
const persona3 = { ...persona };
console.log( persona3 );