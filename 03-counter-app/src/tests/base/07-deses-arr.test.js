
import { retornaArreglo } from "../../base/07-deses-arr"

describe('07-deses-arr tests', () => {
    
    test('retornaArreglo should return a string and a number', () => {
        
        const [ letters, numbers ] = retornaArreglo();        

        // expect( arr ).toEqual( ['ABC', 123] );

        expect( letters ).toBe( 'ABC' );
        expect( typeof letters ).toBe('string');
        
        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe('number');
        
    })

})
