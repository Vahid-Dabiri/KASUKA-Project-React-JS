import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLink } from 'react-icons/fi';
import './Portfolio-item.css';

class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.openPortfolioHandler = this.openPortfolioHandler.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    render() {
        return (
            <div className="img-container" id={`portfolio-${this.props.id}`}>
                <div className="img-details">
                    <img src={this.props.image} alt={this.props.title} />
                    <div className="img-shadow"></div>
                    <div className="img-infos">
                        <h2 className="img-title">{this.props.title}</h2>
                        <p className="img-categ">{this.props.category}</p>
                        <div className="moreInfo">
                            <button id={`${this.props.id}`} className="magnifyPortfolio" onClick={this.openPortfolioHandler}>+</button>
                            <Link onClick={this.scrollToTop} to="/Portfolio-page" className="moreInfoPortfolio" title="More Detailes"><FiLink /></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    openPortfolioHandler() {
        this.props.openHandler();
    }

    scrollToTop(){
        window.scrollTo(0,0);
    }
}

export default PortfolioItem;