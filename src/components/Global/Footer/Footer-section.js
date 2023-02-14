import React, { Component } from 'react';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsSkype} from 'react-icons/bs';
import {ImFacebook} from 'react-icons/im';
import {ImLinkedin2} from 'react-icons/im';
import {FaAngleRight} from 'react-icons/fa';
import './Footer-section.css';
import ListIcon from '../../Home/Content/List-icon';

class FooterSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            icon: < FaAngleRight/>,
            helpfullItems:[
                {
                    id:1,
                    href:'/',
                    link:'Home',
                },
                {
                    id:2,
                    href:'#about',
                    link:'About Us',
                },
                {
                    id:3,
                    href:'#services',
                    link:'Services',
                },
                {
                    id:4,
                    href:'#',
                    link:'Terms of Service',
                },
                {
                    id:5,
                    href:'#',
                    link:'Privacy Policy',
                },
            ],
            services:[
                {
                    id:1,
                    href:'#',
                    link:'Web Design',
                },
                {
                    id:2,
                    href:'#',
                    link:'Development',
                },
                {
                    id:3,
                    href:'#',
                    link:'Production management',
                },
                {
                    id:4,
                    href:'#',
                    link:'Marketing',
                },
                {
                    id:5,
                    href:'#',
                    link:'Graphic Design',
                },
            ]
        }
    }
    render() {
        return (
            <footer>
                <div id="top-footer">
                    <div id="footer-address">
                        <div id="footer-logo">
                            <span id="logo-img"><img src='./images/logo.png' /></span>
                            <span id="footer-brand">KASUKA</span>
                        </div>
                        <div id="footer-contact">
                            <p>Tehran Azadi Street</p>
                            <p>Phone Number: 1234567895</p>
                            <p>Email: info@example.com</p>
                        </div>
                        <div id="footer-social-medias">
                            <a href="https://www.linkedin.com" target="_blank"><ImLinkedin2 /></a>
                            <a href="https://www.skype.com" target="_blank"><BsSkype /></a>
                            <a href="https://www.instagram.com" target="_blank"><BsInstagram /></a>
                            <a href="https://www.twitter.com" target="_blank"><BsTwitter /></a>
                            <a href="https://www.facebook.com" target="_blank"><ImFacebook /></a>
                        </div>
                    </div>
                    <div id="helpfull-links">
                        <h3 className="footer-list-title">Helpfull Links</h3>
                        <div className="footer-list-items">
                            {this.state.helpfullItems.map(item => {
                                return (
                                    <ListIcon key={item.id} icon={this.state.icon} link={item.link} target={item.href} />
                                )
                            })}
                        </div>
                    </div>
                    <div id="footer-services">
                        <h3 className="footer-list-title">Services</h3>
                        <div className="footer-list-items">
                        {this.state.services.map(item => {
                                return (
                                    <ListIcon key={item.id} icon={this.state.icon} link={item.link} target={item.href} />
                                )
                            })}
                        </div>
                    </div>
                    <div id="newsletter">
                        <h3>Our Newsletter</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, eos!</p>
                        <div id="footer-search">
                            <input type="text" />
                                <button>Follow Us</button>
                        </div>
                    </div>
                </div>
                <div id="bottom-footer">
                    <p>Kasuka All Rights Reserved</p>
                    <p>Designed by <a href="#">Kasuka</a></p>
                </div>
            </footer>
        );
    }
}

export default FooterSection;