import React from 'react';
import SavedBookCard from '../SavedBookCard';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function SavedBooks(props) {

    const shit = props.savedBooksState

    return (
        <>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Saved Books</Card.Title>

                            {props.savedBooksState.map((book) => (<SavedBookCard
                                    title={book.title}
                                    subtitle={book.subtitle}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    id={book.id}
                                />))}
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}

export default SavedBooks;
