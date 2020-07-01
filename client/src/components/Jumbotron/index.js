import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Heading(props) {
    return (
        <>
            <Jumbotron>
                <h1>Google Books Search</h1>
                <h3>Search for and Save your favorite books!</h3>
            </Jumbotron>
        </>
    );
}

export default Heading;