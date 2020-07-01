import axios from 'axios';

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const IDBASEURL = 'https://www.googleapis.com/books/v1/volumes/';

export default {
  getBooks: function () {
    return axios.get('/api/books');
  },
  saveBook: function (BookData) {
    return axios.post('/api/books', BookData);
  },
  searchBooks: function (query) {
    return axios.get(BASEURL + query)
  },
  searchBooksById: function (id) {
    return axios.get(IDBASEURL + id);
  }
};
