import React from 'react';
import Masonry from 'react-masonry-component';
import Note from './../Note/Note';
import './style.scss';

const masonryOptions = {
    itemSelector: '.note',
    columnWidth: 250,
    gutter: 10,
    isFitWidth: true
};

const NotesGrid = React.createClass({

    render() {
        return (
            <Masonry
                className='notesGrid'
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
});

export default NotesGrid;
