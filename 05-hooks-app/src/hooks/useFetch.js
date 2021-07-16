
import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    if ( !url ) {
        throw new Error('The url is required');
    }

    const [state, setState] = useState({ data: null, loading: true, error: null });
    
    useEffect(() => {
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            });
    }, [ url ]);

    return state;

}
