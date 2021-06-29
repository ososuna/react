
import heroes, { owners } from '../data/heroes';

export const getHeroeById = ( id ) => heroes.find( heroe => heroe.id === id );
// console.log( getHeroeById(5) );

const getHeroesByOwner = ( owner ) => heroes.filter( heroe => heroe.owner === owner );
// console.log( getHeroesByOwner( 'Marvel' ) );

// console.log( owners );
