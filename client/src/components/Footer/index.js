import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer(props) {
    return (
        <>
            <Container>
                <p style={{
                    position: 'relative',
                    top: 400,
                    textAlign: 'center'
                }}>Jonathan Alpart 2020.</p>
            </Container>
        </>
    );
}

export default Footer;
