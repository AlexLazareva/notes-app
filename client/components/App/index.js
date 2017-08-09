import React from 'react';
import NotesStore from './../../stores/NotesStore';

import NotesEditor from './../NotesEditor/NotesEditor';
import NotesGrid from './../NotesGrid/NotesGrid';

import 'normalize.css';
import './style.css';

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

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    },

    handleNoteAdd(data) {
        console.log(data);
    },
    render() {
        return (
            <div className="app">
                <h2 className="app__header">Notes App</h2>
                <NotesEditor
                    onNoteAdd={this.handleNoteAdd}
                />
                <NotesGrid />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;