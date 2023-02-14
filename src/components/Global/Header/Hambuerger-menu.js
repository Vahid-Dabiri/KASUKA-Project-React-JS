import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import $ from 'jquery';
import './Hambuerger-menu.css';

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.mouseClickHandler = this.mouseClickHandler.bind(this);
        this.mouseClickHandlerDeeper = this.mouseClickHandlerDeeper.bind(this);
        this.mouseClickHandlerClose = this.mouseClickHandlerClose.bind(this);
        this.mouseClickHandlerOpen = this.mouseClickHandlerOpen.bind(this);
    }
    render() {

        const deepDropDownlistItemsHambur = this.props.navList.deepDropDownNavItems.map((item) => {
            return (
                <li key={item.id}><a href={item.itemAddress} onClick={this.mouseClickHandlerClose}>{item.listItem}</a></li>
            )
        }
        );

        const dropDownlistItemsHambur = this.props.navList.dropDownNavItems.map((item) => {
            return (
                item.id === 'drop-list-deeper' ?
                    <li key={item.id}>
                        <a id={item.id}
                            onClick={this.mouseClickHandlerDeeper}>
                            {item.listItem}
                            <IoIosArrowDown />
                        </a>
                        <div id='deeper-drop-down'>
                            <ul id="deeper-ul">{deepDropDownlistItemsHambur}</ul>
                        </div>
                    </li>
                    :
                    <li key={item.id}><a href={item.itemAddress} onClick={this.mouseClickHandlerClose}>{item.listItem}</a></li>
            )
        }
        );

        const HamburListItems = this.props.navList.navItems.map((item) => {
            return (
                item.id === 'drop-list' ?
                    <li key={item.id}>
                        <a id={item.id}
                            onClick={this.mouseClickHandler}>
                            {item.navItem} <IoIosArrowDown />
                        </a>
                        <div id='deep-drop-down'>
                            <ul id="deep-ul">{dropDownlistItemsHambur}</ul>
                        </div>
                    </li>
                    :
                    <li key={item.id}><a href={item.itemAddress} onClick={this.mouseClickHandlerClose}>{item.navItem}</a></li>
            )
        }
        );

        return (
            <>
                <div id="small-menu" onClick={this.mouseClickHandlerOpen}><GiHamburgerMenu className='icon' /></div>
                <div id="hamburger-menu">
                    <ul id="main-hamburger-ul">
                        {HamburListItems}
                    </ul>
                    <div id="close-menu" onClick={this.mouseClickHandlerClose}><RxCross2 /></div>
                </div>
            </>
        );
    }

    mouseClickHandlerDeeper() {
        $("#deeper-drop-down").toggleClass("drop-down-goDown");
    }
    mouseClickHandler() {
        $("#deep-drop-down").toggleClass("drop-down-goDown");
    }

    mouseClickHandlerOpen() {
        $("#hamburger-menu").removeClass("close-menu-list");
        $("#hamburger-menu").addClass("open-menu-list");
    }
    mouseClickHandlerClose() {
        $("#hamburger-menu").removeClass("open-menu-list");
        $("#hamburger-menu").addClass("close-menu-list");
    }
}

export default HamburgerMenu;