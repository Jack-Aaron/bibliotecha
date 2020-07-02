import React, { useState } from 'react';
import API from '../utils/API';
import Searchform from '../components/Searchform';
import Spacer from '../components/Spacer';
import Results from '../components/Results';

function Search(props) {


  const [searchResultsState, setSearchResultsState] = useState([]);

  const searchGoogleBooks = () => {
    API.searchBooks().then((res) => {
      console.log(res.data);
      // setSearchResultsState(res.data);
    })
  }

  return (
    <>
      <Searchform searchGoogleBooks={searchGoogleBooks} searchResultsState={searchResultsState} />
      <Spacer />
      <Results searchResultsState={searchResultsState} />
    </>
  );
}

export default Search;
