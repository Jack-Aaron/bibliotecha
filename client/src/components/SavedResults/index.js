// import React, { useEffect, useState } from 'react';
// import API from '../../utils/API';
// import BookCard from '../BookCard';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function Results(props) {

//     const [booksState, setBooksState] = useState([]);

//     useEffect(() => {
//         API.getBooks().then((res) => {
//             console.log(res.data);
//             setBooksState(res.data);
//         });
//     }, []);

//     return (
//         <>
//             <Container>
//                 <Card>
//                     <Card.Body>
//                         <Card.Title>Results</Card.Title>
//                         <Row>
//                             <Col xs='12'>
//                                 {booksState.map((book) => (<BookCard
//                                     title={book.name}
//                                     authors={[book.authors]}
//                                     description={book.description}
//                                     image={book.image}
//                                     link={book.link}
//                                 />))}
//                             </Col>
//                         </Row>
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </>
//     );
// }

// export default Results;
