import React, { Component } from 'react';
import './Section-title.css';

class SectionTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="section-title">
                    <p>{this.props.title}</p><span className="title-line"></span>
                </div>
                <h2>{this.props.head}</h2>
            </>
        );
    }
}

export default SectionTitle;