import axios from 'axios';

export default {
  getBooks: function () {
    return axios.get('/api/books');
  },
  saveBook: function (BookData) {
    return axios.post('/api/books', BookData);
  }
};
