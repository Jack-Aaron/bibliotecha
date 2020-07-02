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
                                name="searchquery"
                                onChange={props.handleChange}
                                value={props.searchQueryValue}
                                className='form-control'
                            />
                            <Button variant='primary' type='submit'
                                onClick={props.handleFormSubmit}
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
