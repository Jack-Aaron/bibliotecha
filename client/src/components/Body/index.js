import React from 'react';
import Search from '../Search';
import Spacer from '../Spacer';
import Results from '../Results';

function Body(props) {
  return (
    <>
      <Search />
      <Spacer />
      <Results />
    </>
  );
}

export default Body;
