import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Showed again');

    return (
        <small>{ value }</small>
    )
}
)
