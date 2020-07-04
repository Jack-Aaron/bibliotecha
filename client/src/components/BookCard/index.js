import React from 'react';
import { useHistory, useLocation } from "react-router-dom"
import API from '../../utils/API';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BookCard(props) {

    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const viewBook = () => {
      
        window.open(props.link)
    }



    const saveBook = () => {
        let bookId = props.id;
        console.log(props.id)

        // API.searchBooksById()
        // API.saveBook({
        //     title: form.name,
        //     subtitle: form.calPer,
        //     authors: form.ozPer,
        //     description: form.ing,
        //     image: form.nut,
        //     link: 
        //     id:

        // })
        //     .then(res => history.replace(from))
        //     .catch(err => console.log(err))
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                            <Card.Text>{'Written by ' + props.authors}</Card.Text>
                        </Col>
                        <Col xs='auto'>
                            <Row style={{ float: 'right', marginRight: '0.66vmin' }}>
                                <Button
                                    className='ViewBtn'
                                    onClick={viewBook.bind()}
                                    style={{ marginRight: '0.33vmin' }}
                                >View
                                </Button>
                                <Button
                                    className='SaveBtn'
                                onClick={saveBook}
                                >Save
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs='12' sm='auto' md='auto' lg='auto' xl='auto'>
                            <Card.Img
                                variant='bottom'
                                src={props.image} alt={'thumbnail of' + props.title} style={{
                                    width: 'auto',
                                    height: 'auto',
                                    border: '1px solid',
                                    margin: '0 auto'
                                }} />
                        </Col>
                        <Col style={{ marginTop: '1em' }}>
                            <p style={{ fontSize: 'calc(0.66em + 0.66vmin)' }}>{props.description}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default BookCard;
