import React from 'react';

const Display = props => {

    return(
        <>
        <p>Hello from Display</p>
        <p>Balls: {props.balls} </p>
        <p>Strikes: {props.strikes}</p>    
        
            </>
    )

}

export default Display