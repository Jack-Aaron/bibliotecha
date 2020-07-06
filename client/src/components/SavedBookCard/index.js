import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SavedBookCard(props) {

    const viewBook = () => {
        window.open(props.link)
    }

    const renderDescription = (html) => {
        const createMarkup = htmlString => ({ __html: htmlString })
        return (
            <div dangerouslySetInnerHTML={createMarkup(html)}></div>
        )
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                            <Card.Text>{'Written by ' + props.authors.join(', ')
                                .replace(/, ([^,]*)$/, ' and $1')}</Card.Text>
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
                                    className='DeleteBtn'
                                    onClick={() => props.handleDelete(props.id)}
                                >Delete
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
                            <p style={{ fontSize: 'calc(0.66em + 0.66vmin)' }}>{renderDescription(props.description)}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default SavedBookCard;
