
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Heroes functions tests', () => {
    
    test('should return a heroe by id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });
    
    test('should return undefined if heroe does not exists', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('should return an array with the DC heroes', () => {
        
        const owner = 'DC';
        const heroesDc = getHeroesByOwner('DC');

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroesDc ).toEqual( heroesData );


    });

    test('should return an array with the Marvel heroes', () => {
        
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner('Marvel');

        expect( heroesMarvel.length ).toBe( 2 );

    });
    
})
