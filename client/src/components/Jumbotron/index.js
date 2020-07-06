import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Heading() {
    return (
        <>
            <Jumbotron className='jumbo ' style={{
                textAlign: 'center',
                backgroundColor: '#C2DFE3'
            }}>
                <h1>Bibliotecha</h1>
                <h3>Search for and Save your favorite books!</h3>
            </Jumbotron>
        </>
    );
}

export default Heading;