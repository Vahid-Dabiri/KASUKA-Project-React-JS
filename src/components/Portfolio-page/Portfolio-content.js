import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './Portfolio-content.css';

class PortfolioContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

            portfolioImgs: [
                "./images/portfolio-2.jpg",
                "./images/portfolio-3.jpg",
                "./images/portfolio-4.jpg",
            ],

            portfolioListInfo: {
                category: 'Website Design',
                client: 'ASU Corporation',
                projectDate: '12 September 1370',
                projectAddress: 'www.example.com',
                projectUrl: '#',
                projectInfoTxt: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iure
                alias in tenetur mollitia porro molestiae nisi! Fugit, iure sequi adipisci ut dolorum
                repellendus cupiditate obcaecati, officia debitis eius illo aspernatur amet. Praesentium maiores
                voluptatem doloremque laudantium impedit quisquam, quas exercitationem similique in, sit ipsa
                nemo, illo optio ab! Sequi!`,
            }

        }
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        const listItem = this.state.portfolioListInfo;
        return (
            <div id="portfolio-infos">
                <div id="portfolio-info-header">
                    <h2 id="page-title">Portfolio Details</h2>
                    <div id="page-directory"><span><Link to="/">Home</Link></span>/<span>Portfolio Details</span></div>
                </div>
                <div id="portfolio-info-content">
                    <div id="portfolio-page-carosel">
                        <Slider {...settings}>
                            {this.state.portfolioImgs.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h3>
                                            <img src={item} alt="Portfolio Image" />
                                        </h3>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div id="portfolio-information">
                        <div id="portfolio-info-box">
                            <h3 id="info-box-title">Project Information</h3>
                            <ul id="info-box-list">
                                <li><strong>Category: </strong>{listItem.category}</li>
                                <li><strong>Client: </strong>{listItem.client}</li>
                                <li><strong>Project Date: </strong>{listItem.projectDate}</li>
                                <li><strong>Project URL: </strong><a href={listItem.projectUrl}>{listItem.projectAddress}</a></li>
                            </ul>
                        </div>
                        <div id="portfolio-info-text">
                            <h2 id="info-text-title">This is an example of portfolio details</h2>
                            <p id="info-text-txt">{listItem.projectInfoTxt}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioContent;