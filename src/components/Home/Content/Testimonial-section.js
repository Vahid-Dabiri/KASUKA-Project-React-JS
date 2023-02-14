import React, { Component } from 'react';
import TestimonialItem from './Testimonial-items';
import './Testimonial-section.css';

class TestimonialSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section id="parallax-3">
                <div id="testimonials">
                    <TestimonialItem />
                </div>
            </section>
        );
    }
}

export default TestimonialSection;