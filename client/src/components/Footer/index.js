import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer(props) {
    return (
        <>
            <Container>
                <a href='https://jack-aaron.github.io/portfolio' target='_blank'
                    rel='noopener noreferrer'
                    style={{
                        position: 'relative',
                        top: 400
                    }}>Jonathan Alpart 2020.</a>
            </Container>
        </>
    );
}

export default Footer;
