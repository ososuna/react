import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

export const TodoApp = () => {
    
    const initialState = [{
        id: new Date().getTime(),
        desc: 'Learn React',
        done: false
    }];

    const [ todos ] = useReducer(todoReducer, initialState);
    
    console.log( todos );

    return (
        <>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Hello</li>
                <li>World</li>
                <li>From React</li>
            </ul>
        </>
    )
}
