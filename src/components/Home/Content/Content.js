import React, { Component } from 'react';
import MainPoster from './Main-poster';
import AboutSection from './About-section';
import ClientsSlider from './Client-section';
import FeaturesSection from './Features';
import ServicesSection from './Services';
import Parallax2 from './Parallax_2';
import PortfolioSection from './Portfolio-section';
import CountSection from './Count-section';
import TestimonialSection from './Testimonial-section';
import TeamSection from './Team-section';
import FormSection from './Form-section';


class HomeContent extends Component {
    constructor (props){
        super(props)
    }
    render() { 
        return (
            <>
                <MainPoster />
                <AboutSection />
                <ClientsSlider />
                <FeaturesSection />
                <ServicesSection />
                <Parallax2 />
                <PortfolioSection />
                <CountSection />
                <TestimonialSection />
                <TeamSection />
                <FormSection />
            </>
        );
    }
}
 
export default HomeContent;