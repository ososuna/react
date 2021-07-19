import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallBack = () => {
    
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( ( factor ) => {
        setCounter( c => c + factor );
    }, [ setCounter ] );
    
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr/>

            <ShowIncrement increment={ increment } />
        </>
    )
}
