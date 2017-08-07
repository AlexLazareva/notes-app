import React from 'react';
import './style.scss';

export default class NotesEditor extends React.Component {

    render() {
        return (
            <div className="notesEditor">
                <input
                    type="text"
                    className="notesEditor__title"
                    placeholder="Enter note title"
                />
                <textarea
                    placeholder="Enter note text"
                    rows={5}
                    className="notesEditor__text"
                />
                <div className="notesEditor__footer">
                    <button className="notesEditor__button">Add</button>
                </div>
            </div>
        );
    }
}
