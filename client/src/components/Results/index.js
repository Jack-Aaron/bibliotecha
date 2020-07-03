import React from 'react';
import BookCard from '../BookCard';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function Results(props) {

    console.log(props);

    return (
        <>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Results</Card.Title>
                            {props.searchResultsState.items.map(({ volumeInfo }) => (<BookCard
                                title={volumeInfo.title}
                                subtitle={volumeInfo.subtitle}
                                authors={volumeInfo.authors}
                                description={volumeInfo.description}
                                image={volumeInfo.imageLinks.thumbnail}
                                link={volumeInfo.infoLink}
                            />))}
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </>
    );
}

export default Results;
