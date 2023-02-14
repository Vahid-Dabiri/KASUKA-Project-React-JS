import React, { Component } from 'react';
import {GrInstagram} from 'react-icons/gr';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import './Team-member.css';

class TeamMember extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="team-member">
                <div className="social-container">
                    <img src={this.props.image} alt="" />
                        <ul className="social-list">
                            <li><a href={this.props.instagram} target="_blank"><GrInstagram /></a></li>
                            <li><a href={this.props.facebook} target="_blank"><BsFacebook /></a></li>
                            <li><a href={this.props.linkedin} target="_blank"><BsLinkedin /></a></li>
                            <li><a href={this.props.twitter} target="_blank"><BsTwitter /></a></li>
                        </ul>
                </div>
                <div className="team-info">
                    <h2 className="member-name">{this.props.name}</h2>
                    <h4 className="job">{this.props.job}</h4>
                </div>
            </div>
        );
    }
}

export default TeamMember;