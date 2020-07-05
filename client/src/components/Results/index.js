import React from 'react';
import SearchedBookCard from '../SearchedBookCard';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function Results(props) {

    return (
        <>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Results</Card.Title>
                            {console.log(props.searchResultsState.items)}
                            {props.searchResultsState.items.map((book) => (<SearchedBookCard
                                title={book.volumeInfo.title}
                                subtitle={book.volumeInfo.subtitle}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.infoLink}
                                id={book.id}
                            />))}
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}

export default Results;
