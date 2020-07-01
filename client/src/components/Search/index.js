import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search(props) {
    return (
        <>
            <Form>
                <Form.Label>Book Search</Form.Label>
                <Form.Control type='text' placeholder='Book title, author, etc.' />
                <Button variant='primary' type='submit' style={{ float: 'right', margin: 10 }}> Search
  </Button>
            </Form>
        </>
    );
}

export default Search;
