import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client-section.css';

class ClientsSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: window.innerWidth,
            clientsLogos: [
                './images/client-1.png',
                './images/client-2.png',
                './images/client-3.png',
                './images/client-4.png',
                './images/client-5.png',
                './images/client-6.png',
                './images/client-7.png',
                './images/client-8.png',
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
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            accessibility: false
        };

        if (this.state.screenWidth < 990 && this.state.screenWidth > 600) {
            settings.slidesToShow = 4;
        }else if(this.state.screenWidth < 600){
            settings.slidesToShow = 2;
        }

        return (
            <section id="clients" className="clients-container">

                <Slider {...settings}>
                    {this.state.clientsLogos.map((item , index) => {
                        return(
                            <div key={index}>
                                <h3><img src={item} /></h3>
                            </div>
                        );
                    })}
                </Slider>
            </section>
        );
    }
}

export default ClientsSlider;