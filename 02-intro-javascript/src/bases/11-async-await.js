
// const getImagenPromesa = () => new Promise( resolve('https://sadasadasfadaa.com') );
// getImagenPromesa().then( console.log );

const getImagen = async () => {

    try {        
        const apiKey = 'NqFFjmEcN1iM7bF1r2n9xb8kTXq3rk94';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append( img );
    } catch ( error ) {
        console.log( error );
    }

}

getImagen();

// const apiKey = 'NqFFjmEcN1iM7bF1r2n9xb8kTXq3rk94';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion.then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );

//     })
//     .catch( console.warn );


