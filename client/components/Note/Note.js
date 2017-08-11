import React from 'react';

import './styles.scss';

const Note = React.createClass({
    render() {
        const style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>
                <span className="note__del-icon" onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                    ?
                        <h4 className="note__title">{this.props.title}</h4>
                        :
                        null
                }
                <div className="note__text">{this.props.children}</div>
            </div>
        );
    }
});

export default Note;