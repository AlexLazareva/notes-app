import React from 'react';
import NotesEditor from './../NotesEditor/NotesEditor';
import 'normalize.css';
import './style.css';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <NotesEditor />
            </div>
        );
    }
}