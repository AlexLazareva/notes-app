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

        handleTitleChange(event) {
            this.setState({ title: event.target.value });
        },

        handleTextChange(event) {
            this.setState({ text: event.target.value });
        },

        handleNoteAdd() {
            const newNote = {
                title: this.state.title,
                text: this.state.text,
                color: this.state.color
            };

            this.props.onNoteAdd(newNote);
            this.setState({ text: '', title: '', color: '#FFFFFF' });
        },

        handleColorChange() {
            this.setState({ color });
        },

        render() {
            return (
                <div className="notesEditor">
                    <input
                        type="text"
                        className="notesEditor__title"
                        placeholder="Enter note title"
                        value={ this.state.title }
                        onChange={ this.handleTitleChange }
                    />
                    <textarea
                        placeholder="Enter note text"
                        rows={5}
                        className="notesEditor__text"
                        value={ this.state.text }
                        onChange={ this.handleTextChange }
                    />
                    <div className="notesEditor__footer">
                        <ColorPicker
                            value={this.state.color}
                            onChange={this.handleColorChange}
                        />
                        <button
                            className="notesEditor__button"
                            disabled={ !this.state.text }
                            onClick={ this.handleNoteAdd }
                        >Add</button>
                    </div>
                </div>
            );
        }
    }
);

export default NotesEditor;
