
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GifExpertApp = () => {

    // const categories = ['Zenitsu', 'Sana Twice', 'Kurapika'];

    const [categories, setCategories] = useState(['Zenitsu', 'Sana Twice', 'Kurapika']);

    const handleAdd = () => {
        setCategories( ['Hunter x Hunter', ...categories] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick = { handleAdd }>Agregar</button>

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
