import React from 'react';
import BookCard from '../BookCard';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Results(props) {

    console.log(props);

    return (
        <>
            <Container>
                <Card>

                    <Card.Body>
                        <Card.Title>Results</Card.Title>
                        <Row>
                            <Col xs='12'>
                                {props.searchResultsState.items.map(({volumeInfo}) => (<BookCard
                                    title={volumeInfo.title}
                                    authors={[volumeInfo.authors]}
                                    description={volumeInfo.description}
                                    image={volumeInfo.imageLinks.thumbnail}
                                    link={volumeInfo.infoLink}
                                />))}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Results;
