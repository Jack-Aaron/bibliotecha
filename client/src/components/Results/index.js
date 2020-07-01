import React, { useEffect, useState } from 'react';
import API from '../../utils/API';
import BookCard from '../BookCard';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Results(props) {

    const [booksState, setBooksState] = useState([]);

    useEffect(() => {
        API.getBooks().then((res) => {
            console.log(res.data);
            setBooksState(res.data);
        });
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col xs='12'>
                        {booksState.map((book) => (<BookCard
                            title={book.name}
                            authors={[book.authors]}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                        />))}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Results;
