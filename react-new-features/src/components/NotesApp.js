import React, { useEffect, useReducer } from 'react';
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";



const NotesApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])


    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notesData'))   
        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('notesData', JSON.stringify(notes))
    }, [notes])


    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />           
        </NotesContext.Provider>
    );
};


export { NotesApp as default };