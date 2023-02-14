import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial-items.css';


class TestimonialItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    url: "./images/testimonials-5.jpg",
                    name: "Jhon Larson",
                    job: "Entrepreneur",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officia explicabo non quas quibusdam doloremque molestias itaque! Suscipit, minus."
                },
                {
                    id: 2,
                    url: "./images/testimonials-4.jpg",
                    name: "Matt Brandon",
                    job: "Freelancer",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officia explicabo non quas quibusdam doloremque molestias itaque! Suscipit, minus."
                },
                {
                    id: 3,
                    url: "./images/testimonials-3.jpg",
                    name: "Jena Carlisle",
                    job: "Shop owner",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officia explicabo non quas quibusdam doloremque molestias itaque! Suscipit, minus."
                },
                {
                    id: 4,
                    url: "./images/testimonials-2.jpg",
                    name: "Sarah Wilson",
                    job: "Designer",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officia explicabo non quas quibusdam doloremque molestias itaque! Suscipit, minus."
                },
                {
                    id: 5,
                    url: "./images/testimonials-1.jpg",
                    name: "Saul Goodman",
                    job: "CEO: Founder",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus officia explicabo non quas quibusdam doloremque molestias itaque! Suscipit, minus."
                },
            ]

        }
    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false,
            autoplay: true,
        };
        return (

            <Slider {...settings}>
                {this.state.testimonial.map((item) => {
                    return (
                        <div key={item.id}>
                            <h3>
                                <div className="testimonial">
                                    <img src={item.url} alt={item.name} />
                                    <h4 className="name">{item.name}</h4>
                                    <p className="job">{item.job}</p>
                                    <p className="text">{item.text}</p>
                                </div>
                            </h3>
                        </div>
                    );
                })}
            </Slider>

        );
    }
}

export default TestimonialItem;