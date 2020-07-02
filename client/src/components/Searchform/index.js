import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Searchform(props) {

    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Book Search</Card.Title>
                        <Form>
                            <Form.Control type='text' placeholder='Book title, author, etc.'
                                onChange={props.handleChange} />
                            <Button variant='primary' type='submit'
                                onClick={props.searchGoogleBooks()}
                                style={{ float: 'right', margin: 10 }}> Search
  </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default Searchform;
