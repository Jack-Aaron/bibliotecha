import axios from 'axios';
import openSocket from 'socket.io-client';
// const socket = openSocket('https://protected-basin-70677.herokuapp.com/');
const socket = openSocket('localhost:3000/');

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const IDBASEURL = 'https://www.googleapis.com/books/v1/volumes/';

export default {
  getBooks: function () {
    return axios.get('/api/books/');
  },
  saveBook: function (bookData) {
    return axios.post('/api/books/', bookData);
  },
  searchBooks: function (query) {
    return axios.get(BASEURL + query);
  },
  searchBooksById: function (id) {
    return axios.get(IDBASEURL + id);
  },
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
  notifyUser: function (cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('notifyUser', 100);
  }
};
