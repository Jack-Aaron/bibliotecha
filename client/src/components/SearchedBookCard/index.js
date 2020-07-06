import React, { useState } from 'react';
import API from '../../utils/API';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SearchedBookCard(props) {

    const viewBook = () => {
        window.open(props.link)
    }

    const [notification, setNotification] = useState({
        updateBook: false,
        message: ''
    });

    function removeNotification() {
        setNotification({ updateBook: false })
    };

    const notify = () => {
        API.notifyUser(() => {
            setNotification({ updateBook: true });
        })
        setTimeout(removeNotification, 3000);
    };

    const handleSave = () => {
        API.searchBooksById(props.id)
            .then(res => {
                console.log(res.data)
                console.log({
                    title: res.data.volumeInfo.title,
                    subtitle: res.data.volumeInfo.subtitle,
                    authors: res.data.volumeInfo.authors,
                    description: res.data.volumeInfo.description,
                    image: `http://books.google.com/books/content?id=${res.data.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`,
                    link: res.data.volumeInfo.infoLink,
                    googleId: res.data.id,
                })
                API.saveBook({
                    title: res.data.volumeInfo.title,
                    subtitle: res.data.volumeInfo.subtitle,
                    authors: res.data.volumeInfo.authors,
                    description: res.data.volumeInfo.description,
                    image: `http://books.google.com/books/content?id=${res.data.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`,
                    link: res.data.volumeInfo.infoLink,
                    googleId: res.data.id,
                }).then(() => {
                    notify()
                    console.log(notification.updateBook)
                })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
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
                                    className='SaveBtn'
                                    onClick={handleSave}
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
                            <p style={{ fontSize: 'calc(0.66em + 0.66vmin)' }}>{renderDescription(props.description)}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}

export default SearchedBookCard;
