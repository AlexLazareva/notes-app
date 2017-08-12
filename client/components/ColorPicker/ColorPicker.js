import React from 'react';
import cx from 'classnames';
import './style.scss';

export default class ColorPicker extends React.Component {

    render() {
        const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80', '#CCFF90', '#CFD8DC', '#FFD180'];
        return (
            <div className="colorPicker">
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            className={cx('colorPicker__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
}