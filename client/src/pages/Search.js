import React, { useState } from 'react';
// import { useHistory, useLocation } from "react-router-dom"
import API from '../utils/API';
import Searchform from '../components/Searchform';
import Spacer from '../components/Spacer';
import Results from '../components/Results';

function Search(props) {

  const [searchResultsState, setSearchResultsState] = useState({
    items: [],
    searchquery: ''
  })

  const initalForm = { searchquery: '' }
  const [formObject, setFormObject] = useState(initalForm)
  // let history = useHistory();
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: "/Search" } };

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.searchquery) {
      API.searchBooks(formObject.searchquery, {
        searchquery: formObject.searchquery
      }).then(res => {
        setSearchResultsState(res.data);
        setFormObject(initalForm)
      })
        // .then(res => history.replace(from))
        .catch(err => console.log(err))
    }
  };

  return (
    <>
      <Searchform
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        // formSearchQuery={formObject.searchQueryValue}
        searchQueryValue={formObject.searchquery || ''} />
      <Spacer />
      <Results searchResultsState={searchResultsState} />
    </>
  );
}

export default Search;
