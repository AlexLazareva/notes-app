import React from 'react';
import Masonry from 'react-masonry-component';

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

            </Masonry>
        );
    }
});

export default NotesGrid;
