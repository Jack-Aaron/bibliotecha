import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import SavedBooks from '../components/SavedBooks';
import Spacer from '../components/Spacer';

function Saved(props) {

    const [savedBooksState, setSavedBooksState] = useState([])

    useEffect(() => {
        API.getBooks()
            .then(res => setSavedBooksState(res.data))
            .catch(err => console.log(err))


    })

    return (
        <>
            <Spacer />
            <SavedBooks
                savedBooksState={savedBooksState}
            />
        </>
    );
}

export default Saved;
