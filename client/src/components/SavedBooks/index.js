import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import SavedBookCard from '../SavedBookCard';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function SavedBooks(props) {

    const [savedBooksState, setSavedBooksState] = useState([])

    useEffect(() => loadBooks(), []);

const loadBooks = () => {
    API.getBooks() // .bind needed?
        .then(res => {
            setSavedBooksState(res.data)
        })
        .catch(err => console.log(err))
}

const handleDelete = (bookId) => {
    API.deleteBook(bookId)
        .then(() => setSavedBooksState(savedBooksState.filter(book => book._id !== bookId)))
        .catch(err => console.log(err))
}

    return (
        <>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Saved Books</Card.Title>

                            {savedBooksState.map(book => (<SavedBookCard
                                title={book.title}
                                subtitle={book.subtitle}
                                authors={book.authors}
                                description={book.description}
                                image={book.image}
                                link={book.link}
                                id={book._id}
                                savedBooksState={savedBooksState}
                                handleDelete={handleDelete}
                            />))}
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}

export default SavedBooks;
