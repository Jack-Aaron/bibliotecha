import React, { useState } from 'react';
import API from '../utils/API';
import Searchform from '../components/Searchform';
import Spacer from '../components/Spacer';
import Results from '../components/Results';

function Search(props) {

  const [searchResultsState, setSearchResultsState] = useState({
    items: [],
    searchquery: '',
    error: '',
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
        didSearch()
      })
        .catch(err => {
          if (err.response) {
            console.log(err.response);
            setSearchResultsState({ error: err.response.data.message });
          }
        })
    }
  };

  const [hasSearched, setHasSearched] = useState(false);

  function didSearch() {
    setHasSearched(true)
  };

  const showResults = (
    <div>
      <Searchform
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        searchQueryValue={formObject.searchquery || ''} />
      <Spacer />
      <Results searchResultsState={searchResultsState} />
    </div>
  );

  const noResults = (
    <div>
      <Searchform
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        searchQueryValue={formObject.searchquery || ''} />
      <Spacer />
    </div>
  );

  return (
    <div>
      {hasSearched === true ? showResults : noResults}
    </div>
  );
}

export default Search;
