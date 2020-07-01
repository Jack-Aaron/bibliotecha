const axios = require('axios');

// Defining methods for the googleController
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get('https://www.googleapis.com/books/v1/volumes/?q=', { params })
            .then(console.log(res))
            .catch(console.log(err))
    },
    searchById: function (id) {
        const { query: params } = req;
        axios.get('https://www.googleapis.com/books/v1/volumes/', { id })
            .then(console.log(res))
            .catch(console.log(err))
    }


    // const BASEURL = “https://www.googleapis.com/books/v1/volumes?q=”;
    // const IDBASEURL = “https://www.googleapis.com/books/v1/volumes/”;





    // search: function (query) {
    //         return axios.get(BASEURL + query);
    //     },
    //     searchById: function (id) {
    //         return axios.get(IDBASEURL + id);
    //     },

};