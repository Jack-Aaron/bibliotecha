import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Heading(props) {
    return (
        <>
            <Jumbotron style={{
                textAlign: 'center'
            }}>
                <h1>Google Books Search</h1>
                <h4>Search for and Save your favorite books!</h4>
            </Jumbotron>
        </>
    );
}

export default Heading;