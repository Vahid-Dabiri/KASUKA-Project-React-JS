import React, { Component } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import $ from 'jquery';
import './Go-up-page.css';

class GoUpBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowScrollY: window.scrollY,
        }

        this.goUpHandler = this.goUpHandler.bind(this);
        this.showGoUpBtn = this.showGoUpBtn.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll' , this.showGoUpBtn);
    }

    componentDidUpdate(){
        window.addEventListener('scroll' , this.showGoUpBtn);
    }


    render() {
        return (
            <div id='go-up-page-btn' onClick={this.goUpHandler}><AiOutlineArrowUp /></div>
        );
    }

    showGoUpBtn() {
        this.setState({windowScrollY: window.scrollY});
        if (this.state.windowScrollY > 450) {
            $("#go-up-page-btn").addClass('show-go-up-btn');
        }else{
            $("#go-up-page-btn").removeClass('show-go-up-btn');

        }
    }

    goUpHandler() {
        window.scrollTo(0, 0);
    }
}

export default GoUpBtn;