import React from 'react';
import ColorPicker from './../ColorPicker/ColorPicker';
import './style.scss';

const NotesEditor = React.createClass(
    {

        getInitialState() {
            return {
                title: '',
                text: '',
                color: '#fff'
            }
        },

        render() {
            return (
                <div className="notesEditor">
                    <input
                        type="text"
                        className="notesEditor__title"
                        placeholder="Enter note title"
                        value={ this.state.title }
                    />
                    <textarea
                        placeholder="Enter note text"
                        rows={5}
                        className="notesEditor__text"
                        value={ this.state.text }
                    />
                    <div className="notesEditor__footer">
                        <ColorPicker/>
                        <button className="notesEditor__button">Add</button>
                    </div>
                </div>
            );
        }
    }
);

export default NotesEditor;
