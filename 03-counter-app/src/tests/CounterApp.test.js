
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from "../CounterApp";

describe('CounterApp component test', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('should show <CounterApp /> correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();        

    });


    test('should show 100 as default value', () => {
        
        const wrapper = shallow( <CounterApp value = { 100 } /> );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '100' );

    });

    test('should increase on button +1', () => {
        
        wrapper.find('button').at(0).simulate( 'click' );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');

    });
    

    test('should decrease on button -1', () => {
        
        wrapper.find('button').at(2).simulate( 'click' );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');

    });


    test('should show the default value on button reset', () => {
       
        const wrapper = shallow( <CounterApp value = { 105 } /> );
        
        wrapper.find('button').at(0).simulate( 'click' );
        wrapper.find('button').at(0).simulate( 'click' );
        wrapper.find('button').at(1).simulate( 'click' );
        
        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe( '105' );

    });
    

});
