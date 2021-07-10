
import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('02-template-string.js tests', () => {

    test('getSaludo should return Hola Zenitsu', () => {
        
        const name = 'Zenitsu';

        const saludo = getSaludo( name );

        expect( saludo ).toBe( 'Hola ' + name );

    })
    
    // getSaludo should return Hola Tanjirou if there is not name argument
    test('getSaludo should return Hola Tanjirou if there is not name argument', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Tanjirou' );

    })
    

});