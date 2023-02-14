import React, { Component } from 'react';
import PortfolioItem from './Portfolio-item';
import { RxCross2 } from 'react-icons/rx';
import Slider from 'react-slick';
import PrismaZoom from 'react-prismazoom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import './Portfolio-section.css';
import SectionTitle from './Section-title';
import PortfolioModal from './Portfolio-modal';


class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatePortfolio: [],
            portfolioListItems: [
                {
                    id: "all",
                    title: "All"
                },
                {
                    id: "internet",
                    title: "Internet"
                },
                {
                    id: "app",
                    title: "App"
                },
                {
                    id: "production",
                    title: "Production"
                },
            ],
            imagesInfo: [

                {
                    id: 1,
                    url: './images/portfolio-1.jpg',
                    title: 'Internet 1',
                    category: ['Internet']
                },
                {
                    id: 2,
                    url: './images/portfolio-2.jpg',
                    title: 'Internet 2',
                    category: ['Internet']
                },
                {
                    id: 3,
                    url: './images/portfolio-3.jpg',
                    title: 'Internet 3',
                    category: ['Internet']
                },

                {
                    id: 4,
                    url: './images/portfolio-4.jpg',
                    title: 'App 1',
                    category: ['App']
                },
                {
                    id: 5,
                    url: './images/portfolio-5.jpg',
                    title: 'App 2',
                    category: ['App']
                },
                {
                    id: 6,
                    url: './images/portfolio-6.jpg',
                    title: 'App 3',
                    category: ['App']
                },

                {
                    id: 7,
                    url: './images/portfolio-7.jpg',
                    title: 'Production 1',
                    category: ['Production']
                },
                {
                    id: 8,
                    url: './images/portfolio-8.jpg',
                    title: 'Production 2',
                    category: ['Production']
                },
                {
                    id: 9,
                    url: './images/portfolio-9.jpg',
                    title: 'Production 3',
                    category: ['Production']
                },

            ],
        }

        this.firstBackGroundColor = this.firstBackGroundColor.bind(this);
        this.portfolioListClickHandler = this.portfolioListClickHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.modalImageSizeHandler = this.modalImageSizeHandler.bind(this);
    }

    componentDidMount() {
        this.firstBackGroundColor();
    }

    render() {
        let settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
        }

        return (
            <section id="portfolio" className="section">

                <div id="portfolio-modal" className='portfolio-first-position'>
                    <div id="modals-container">
                        <Slider {...settings}>
                            {this.state.imagesInfo.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h3>
                                            <PrismaZoom maxZoom={3} >
                                                <PortfolioModal key={item.id} image={item.url} title={item.title} category={item.category} >
                                                    <img src={item.url} alt={item.title} className="img-modal" />
                                                </PortfolioModal>
                                            </PrismaZoom>
                                        </h3>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div id="close-portfolio-modal" onClick={this.closeModalHandler}><RxCross2 /></div>
                </div>

                <SectionTitle title="Portfolio" head="Check Our Portfolio" />
                <div id="portfolio-container">
                    <ul id="portfolio-lists">
                        {this.state.portfolioListItems.map((item) => {
                            return (
                                <li key={item.id} id={item.id} className="portfolio-list" onClick={() => { this.portfolioListClickHandler(event) }}>{item.title}</li>
                            )
                        })}
                    </ul>
                    <div id="images-container">

                        {
                            this.state.updatePortfolio.length
                                ? (this.state.updatePortfolio.map(item => {
                                    return (
                                        <PortfolioItem id={item.id} key={item.id} image={item.url} title={item.title} category={item.category} openHandler={this.openModalHandler} />
                                    )
                                }))
                                : (
                                    (this.state.imagesInfo.map(item => {
                                        return (
                                            <PortfolioItem id={item.id} key={item.id} image={item.url} title={item.title} category={item.category} openHandler={this.openModalHandler} />
                                        )
                                    }))
                                )
                        }

                    </div>
                </div>
            </section>
        );
    }

    firstBackGroundColor() {
        $(".portfolio-list").each((item) => {
            if ($(".portfolio-list")[item].id == 'all') {
                $(".portfolio-list")[item].classList.add('active');
            };
        })
    }

    portfolioListClickHandler(event) {
        $(".portfolio-list").each(() => {
            $(".portfolio-list").removeClass('active');
        })
        event.target.classList.add('active');
        let newUpdatePortfolio = [];
        if (event.target.innerHTML == "All") {
            this.setState({
                updatePortfolio: []
            })
        }
        this.state.imagesInfo.forEach((item) => {
            if (item.category.includes(event.target.innerHTML)) {
                newUpdatePortfolio.push(item);
                this.setState({
                    updatePortfolio: [...newUpdatePortfolio]
                })
            }
        })
    }

    modalImageSizeHandler() {
        $(".img-modal").each((index, item) => {
            let imageScale = item.width / item.height;
            if (imageScale < 1) {
                item.style.width = '50%';
                $(".modal-infos")[index].style.width = '50%';
            }
        })
    }

    closeModalHandler() {
        $("#portfolio-modal").removeClass('open-portfolio-modal');
        $("#portfolio-modal").addClass('close-portfolio-modal');
    }
    openModalHandler() {
        this.modalImageSizeHandler();
        $("#portfolio-modal").removeClass('close-portfolio-modal');
        $("#portfolio-modal").addClass('open-portfolio-modal');
    }

}

export default PortfolioSection;