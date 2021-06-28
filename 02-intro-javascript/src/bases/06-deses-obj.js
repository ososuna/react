
// Desestructuración de objetos o
// Asignación desestructurante
const persona = {
    nombre: 'Zenitsu',
    edad: 16,
    respiracion: 'Trueno',
    rango: 'Tsuguko'
}

// const { nombre:nombre2 , edad, respiracion } = persona;

// console.log( nombre2 );
// console.log( edad );
// console.log( respiracion );

const useContext = ({ respiracion, nombre, edad, rango = 'Pilar' }) => {
    
    // console.log( nombre, edad, rango );
    return {
        aliento: respiracion,
        anios: edad,
        latlng: {
            lat: 192.3453,
            lng: 32.6445
        } 
    }

}

// const { aliento, anios, latlng: { lat, lng } } = useContext( persona );
const { aliento, anios, latlng } = useContext( persona );
const { lat, lng } = latlng;

console.log( aliento, anios, lat, lng );
