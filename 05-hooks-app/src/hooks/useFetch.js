
import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    if ( !url ) return new Error('The url is required');
    
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });
    
    // When effect is not mounted
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);
    
    useEffect(() => {
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });
    }, [ url ]);

    return state;

}
