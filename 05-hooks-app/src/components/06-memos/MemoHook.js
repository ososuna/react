import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import hardProcess from '../../helpers/hardProcess';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const { counter, increment } = useCounter( 200 );
    const [ show, setShow ] = useState(true);

    const memoHardProcess = useMemo(() => hardProcess( counter ), [ counter ]);

    return (
        <>
            <h1>MemoHook</h1>
            <h3> Counter: <small> { counter }</small> </h3>
            <hr/>
            
            <p>{ memoHardProcess }</p>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>
        </>
    )
}
