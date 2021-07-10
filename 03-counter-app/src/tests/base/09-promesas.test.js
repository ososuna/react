
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Promises tests', () => {
        
    test('getHeroeByIdAsync should return an async heroe', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
       
                expect( heroe ).toBe( heroes[0] );
                done();
       
            });

    });

    test('should obtain an error if heroe by id does not exists', ( done ) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });

    });
    

});
