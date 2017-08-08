import React from 'react';
import NotesEditor from './../NotesEditor/NotesEditor';
import NotesGrid from './../NotesGrid/NotesGrid';
import 'normalize.css';
import './style.css';

const App = React.createClass(
    {
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
        }
    }
);

export default App;