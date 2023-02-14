import React, { Component } from 'react';
import NavBar from './Nav-bar';
import './Header-section.css';
import HamburgerMenu from './Hambuerger-menu';
import {Link} from 'react-router-dom';


class HeaderSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screenWidth: window.innerWidth,
            navItems: [
                { id: 'home-tag', navItem: 'Home', itemAddress: '/' },
                { id: 'about-us-tag', navItem: 'About Us', itemAddress: '#about' },
                { id: 'services-tag', navItem: 'Services', itemAddress: '#services' },
                { id: 'portfolio-tag', navItem: 'Portfolio', itemAddress: '#portfolio' },
                { id: 'team-tag', navItem: 'Team', itemAddress: '#team-section' },
                { id: 'drop-list', navItem: 'Drop-Down List', itemAddress: '#' },
                { id: 'contact-us-tag', navItem: 'Contact Us', itemAddress: '#contact-us' },
            ],
            dropDownNavItems: [
                { id: 'drop-list-1', listItem: 'Drop-Down 1', itemAddress: '#' },
                { id: 'drop-list-2', listItem: 'Drop-Down 2', itemAddress: '#' },
                { id: 'drop-list-3', listItem: 'Drop-Down 3', itemAddress: '#' },
                { id: 'drop-list-deeper', listItem: 'Drop-Down Deeper', itemAddress: '#' },
                { id: 'drop-list-5', listItem: 'Drop-Down 5', itemAddress: '#' },
                { id: 'drop-list-6', listItem: 'Drop-Down 6', itemAddress: '#' },
            ],
            deepDropDownNavItems: [
                { id: 'deep-drop-list-1', listItem: 'Deep Drop-Down 1', itemAddress: '#' },
                { id: 'deep-drop-list-2', listItem: 'Deep Drop-Down 2', itemAddress: '#' },
                { id: 'deep-drop-list-3', listItem: 'Deep Drop-Down 3', itemAddress: '#' },
                { id: 'deep-drop-list-4', listItem: 'Deep Drop-Down 4', itemAddress: '#' },
                { id: 'deep-drop-list-5', listItem: 'Deep Drop-Down 5', itemAddress: '#' },
                { id: 'deep-drop-list-6', listItem: 'Deep Drop-Down 6', itemAddress: '#' },
            ]
        }
    }

    updateDimensions = () => {
        this.setState({ screenWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        return (
            <div id='main-header'>
                <h1 id="logo"><Link to="/">KASUKA<img src='./images/logo.png' /></Link></h1>
                {this.state.screenWidth >= 1000
                    ? (<><div id="big-menu"><NavBar navList={this.state} /></div>
                        <button id="start-btn"><a href='#about'>START</a></button></>)
                    : (<div id='btn-menu-container'>
                        <button id="start-btn">
                            <a href='#about'>START</a>
                        </button>
                        <HamburgerMenu navList={this.state} />
                    </div>)}
            </div>
        );
    }
}

export default HeaderSection;