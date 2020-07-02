import React from 'react';
import BookCard from '../BookCard';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Results(props) {

    // console.log(props.searchResultsState);

    return (
        <>
            <Container>
                <Card>

                    <Card.Body>
                        <Card.Title>Results</Card.Title>
                        <Row>
                            <Col xs='12'>
                                {/* {props.searchResultsState.map((book) => (<BookCard
                                    title={book.name}
                                    authors={[book.authors]}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                />))} */}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Results;
