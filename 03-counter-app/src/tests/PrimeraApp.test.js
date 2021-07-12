
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

describe('<PrimeraApp /> tests', () => {
    
    // test('should show the message "Hola Mundo"', () => {
        
    //     const saludo = 'Hola Mundo';
        
    //     const { getByText } = render( <PrimeraApp saludo='Hola Mundo' /> );

    //     expect( getByText( saludo ) ).toBeInTheDocument();

    // })

    test('should show <PrimeraApp /> correctly', () => {
        
        const saludo = 'Hola Mundo';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );
        
        expect( wrapper ).toMatchSnapshot();

    });
    

    test('should show the props subtitle', () => {
        
        const saludo = 'Hola Mundo';
        const subtitle = 'This is a subtitle';
        
        const wrapper = shallow(
            <PrimeraApp
                saludo = { saludo }
                subtitulo = { subtitle }
            />
        );
        
        const textParagraph = wrapper.find('p').text();
        
        expect( textParagraph ).toBe( subtitle );

    });

})

