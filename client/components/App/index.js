import React from 'react';
import NotesStore from './../../stores/NotesStore';
import NotesActions from '../../actions/NotesActions';

import NotesEditor from './../NotesEditor/NotesEditor';
import NotesGrid from './../NotesGrid/NotesGrid';

import 'normalize.css';
import './style.scss';

function getStateFromFlux() {
    return {
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        NotesActions.loadNotes();
    },

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    },

    handleNoteAdd(data) {
        NotesActions.createNote(data);
    },

    render() {
        return (
            <div className="app">
                <h2 className="app__header">Notes App</h2>
                <NotesEditor
                    onNoteAdd={this.handleNoteAdd}
                />
                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;