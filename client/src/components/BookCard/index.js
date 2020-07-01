import React from 'react';
import Card from 'react-bootstrap/Card';

function BookCard(props) {
    return (
        <>
            <Card>
                <Card.Img src={props.image} alt={'thumbnail of' + props.title} style={{
                    width: 'auto',
                    height: 'auto'
                }} />
                <Card.Body>
                    <Card.Title>{'Title:' + props.title}</Card.Title>
                    <Card.Subtitle>{'Author(s):' + props.authors}</Card.Subtitle>
                    <Card.Text>{'Description:' + props.description}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookCard;
