
import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('GifGrid component tests', () => {
    
    const category = 'Hunter x Hunter';

    test('should match with snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    
    });
    
    test('should show items when the images are loaded - useFetchGifs', () => {

        const gifs = [{
            id: '123',
            url: 'https://localhost/something.jpg',
            title: 'A title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
});
