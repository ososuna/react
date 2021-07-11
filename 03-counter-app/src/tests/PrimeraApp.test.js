
import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";

describe('<PrimeraApp /> tests', () => {
    
    test('should show the message "Hola Mundo"', () => {
        
        const saludo = 'Hola Mundo';
        
        const { getByText } = render( <PrimeraApp saludo='Hola Mundo' /> );

        expect( getByText( saludo ) ).toBeInTheDocument();

    })
    

})

