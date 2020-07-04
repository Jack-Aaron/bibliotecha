import React, { useState } from 'react';
import API from '../utils/API';
import Searchform from '../components/Searchform';
import Spacer from '../components/Spacer';
import Results from '../components/Results';

function Search(props) {

  const [searchResultsState, setSearchResultsState] = useState({
    items: [],
    searchquery: ''
  })

  const searchForm = { searchquery: '' }
  const [formObject, setFormObject] = useState(searchForm)

  function handleChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.searchquery) {
      API.searchBooks(formObject.searchquery, {
        searchquery: formObject.searchquery
      }).then(res => {
        setSearchResultsState(res.data);
        setFormObject(searchForm)
      })
        .catch(err => console.log(err))
    }
  };

  return (
    <>
      <Searchform
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        searchQueryValue={formObject.searchquery || ''} />
      <Spacer />
      <Results searchResultsState={searchResultsState} />
    </>
  );
}

export default Search;
