import React, { useState } from 'react';
import API from '../utils/API';
import SavedBooks from '../components/SavedBooks';
import Spacer from '../components/Spacer';

function Saved(props) {

    //   const [savedBooksState, setsavedBooksState] = useState({
    //     items: [],
    //     searchquery: ''
    //   })

    //   const initalForm = { searchquery: '' }
    //   const [formObject, setFormObject] = useState(initalForm)

    //   function handleChange(event) {
    //     const { name, value } = event.target;
    //     console.log(event.target);
    //     setFormObject({ ...formObject, [name]: value })
    //   };

    //   function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.searchquery) {
    //       API.searchBooks(formObject.searchquery, {
    //         searchquery: formObject.searchquery
    //       }).then(res => {
    //         setsavedBooksState(res.data);
    //         setFormObject(initalForm)
    //       })
    //         .catch(err => console.log(err))
    //     }
    //   };

    return (
        <>
            <Spacer />
            <SavedBooks
            //   savedBooksState={savedBooksState} 
            />
        </>
    );
}

export default Saved;
