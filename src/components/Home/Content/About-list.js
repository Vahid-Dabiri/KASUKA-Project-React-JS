import React, { Component } from 'react';
import {RiCheckDoubleFill} from 'react-icons/ri';
import './About-list.css';

class AboutList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about-list">
                <p><span className='double-check'>{<RiCheckDoubleFill />}</span> {this.props.text}</p>
            </div>
        );
    }
}

export default AboutList;