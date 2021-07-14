
import { React } from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component tests', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
       jest.clearAllMocks();
       wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('should be shown correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the text input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World';
        
        input.simulate('change', { target: { value } });
    
    });

    test('should not post on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });    
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('should call setCateggories and clean the text input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello World';
        
        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( input.prop('value') ).toBe('');

    });
    
});
