import React, { Component } from 'react';
import './List-icon.css';

class ListIcon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list-item">
                <span>{this.props.icon}<a href={this.props.target}>{this.props.link}</a></span>
                <div className="list-item-info">
                    <h2 className="list-head">{this.props.head}</h2>
                    <p className="list-text"><strong>{this.props.title} </strong>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default ListIcon;