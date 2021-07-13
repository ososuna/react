
import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('GifGridItem component tests', () => {
    
    const title = 'A title';
    const url   = 'https://localhost/something.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
    
    test('should show <GifGridItem /> correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should be a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('should be the url and alt of the image', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    
    });
    
    test('should have animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        
        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );

    });
    
});

