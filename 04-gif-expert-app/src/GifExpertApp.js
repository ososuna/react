
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Zenitsu', 'Sana Twice', 'Kurapika']);

    // const handleAdd = () => {
    //     setCategories( ['Hunter x Hunter', ...categories] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>
                {
                    categories.map( ( category ) => {
                        return <li key = { category }>{ category }</li>
                    })
                }
            </ol>

        </>
    );

}

export default GifExpertApp;
