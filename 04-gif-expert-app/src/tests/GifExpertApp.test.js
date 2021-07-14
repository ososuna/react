
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp component tests', () => {
    
    test('should match with snapshot', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show a categories list', () => {
        
        const categories = ['Hunter x Hunter', 'Sana'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

    });
    

});
