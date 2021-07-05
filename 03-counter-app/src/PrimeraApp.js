
import React from 'react';
import PropTypes from 'prop-types';

// Functional Components
const PrimeraApp = ({ saludo , subtitulo }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Subtítulo'
}

export default PrimeraApp;