import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const IDBASEURL = 'https://www.googleapis.com/books/v1/volumes/';

export default {
  getBooks: function (input) {
    return axios.get('/api/book/');
  },
  saveBook: function (bookData) {
    return axios.post('/api/book/', bookData);
  },
  searchBooks: function (query) {
    return axios.get(BASEURL + query)
  },
  searchBooksById: function (id) {
    return axios.get(IDBASEURL + id);
  }
};
