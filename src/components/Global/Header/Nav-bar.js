import React, { Component, createRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './Nav-bar.css';


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.mouseHoverHandler = this.mouseHoverHandler.bind(this);
        this.mouseUnHoverHandler = this.mouseUnHoverHandler.bind(this);
        this.mouseHoverHandlerDeep = this.mouseHoverHandlerDeep.bind(this);
        this.mouseUnHoverHandlerDeep = this.mouseUnHoverHandlerDeep.bind(this);
    }

    render() {

        const deepDropDownlistItems = this.props.navList.deepDropDownNavItems.map((item) => {
            return (
                <li key={item.id} id={item.id}><Link to={item.itemAddress}>{item.listItem}</Link></li>
            )
        }
        );

        const dropDownlistItems = this.props.navList.dropDownNavItems.map((item) => {
            return (
                item.id === 'drop-list-deeper' ?
                    <li key={item.id} id={item.id}
                        onMouseEnter={this.mouseHoverHandlerDeep}
                        onMouseLeave={this.mouseUnHoverHandlerDeep}>
                        <a>
                            {item.listItem}
                            <IoIosArrowForward />
                        </a>
                        <ul id="deep-dropDown-navBar">{deepDropDownlistItems}</ul>
                    </li>
                    :
                    <li key={item.id} id={item.id}><Link to={item.itemAddress}>{item.listItem}</Link></li>
            )
        }
        );

        const listItems = this.props.navList.navItems.map((item) => {
            return (
                item.id === 'drop-list' ?
                    <li key={item.id} id={item.id}
                        onMouseEnter={this.mouseHoverHandler}
                        onMouseLeave={this.mouseUnHoverHandler}>
                        <a>
                            {item.navItem}
                            <IoIosArrowDown />
                        </a>
                        <ul id="dropDown-navBar">{dropDownlistItems}</ul>
                    </li>
                    :
                    (item.itemAddress == "/"
                        ? <li key={item.id} id={item.id}><Link className="navBar-main-items" to={item.itemAddress}>{item.navItem}</Link></li>
                        : <li key={item.id} id={item.id}><a className="navBar-main-items" href={item.itemAddress}>{item.navItem}</a></li>
                    ))
        }
        );

        return (
            <>
                <ul id="main-navBar">{listItems}</ul>
            </>
        );
    }


    mouseHoverHandler() {
        $('#dropDown-navBar').addClass('show-dropDown');
        $('#dropDown-navBar').removeClass('hide-dropDown');
    }
    mouseUnHoverHandler() {
        $('#dropDown-navBar').removeClass('show-dropDown');
        $('#dropDown-navBar').addClass('hide-dropDown');
    }

    mouseHoverHandlerDeep() {
        $('#deep-dropDown-navBar').addClass('show-deep-dropDown');
        $('#deep-dropDown-navBar').removeClass('hide-deep-dropDown');
    }
    mouseUnHoverHandlerDeep() {
        $('#deep-dropDown-navBar').removeClass('show-deep-dropDown');
        $('#deep-dropDown-navBar').addClass('hide-deep-dropDown');
    }
}

export default NavBar;