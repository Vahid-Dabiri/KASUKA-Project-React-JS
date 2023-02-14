import React, { Component } from 'react';
import './About-section.css';
import AboutList from './About-list';


class AboutSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="about">
                <div className="about-text">
                    <div className="about-img">
                        <img src="./images/about.jpg" alt="about us" />
                    </div>
                    <h3>Kasuka Digital Co</h3>
                    <p>Noad Digital Marketing Company, as a leading company in Iran's digital marketing industry, is trying
                        to
                        play an important role in Iran's economic prosperity with the development of domestic businesses by
                        taking advantage of today's technical knowledge and providing new marketing and branding solutions.
                        As
                        the most specialized digital marketing brand in Iran and expanding its name in global markets, Noad
                        has
                        taken steps to export services based on modern technologies. Noad owes its progress during a decade
                        of
                        activity to transparency, coherence and adherence to the expected results of its customers.
                        Investing in
                        new technologies, quality and innovation, adherence to commitments, customer satisfaction and
                        loyalty,
                        focused and dynamic human resources are the inherent values of Noad. The digital space has created a
                        tremendous change in communication and the way people interact with each other. The tools and
                        platforms
                        created in this era have increased the power of bargaining and choice for people and made it easier
                        to
                        evaluate and compare different brands and products. We consider this change of attitude in choosing
                        a
                        brand and product as an opportunity for us and our customers. In the digital space, it is easy to
                        identify the target market, discover their needs, desires, and interests, and use the information
                        obtained to create and develop products, brands, and appropriate experiences that integrate
                        technology
                        and creativity along with marketing methods. Novin comes up, took action. At Noad, we are ready to
                        accept new challenges and stick to our commitments at any cost.</p>
                    <AboutList text = '10 years of experience in providing specialized digital marketing services andnew marketing solutions'/>
                    <AboutList text = 'Our focus in all implementation strategies is on digital branding and aligning digital marketing strategies with your other branding and marketing activities.'/>
                    <AboutList text = 'Sign up to receive the latest digital marketing news, trends and events'/>
                    
                    <div id="last-about-text">
                        <p>Noad services in order to integrate all the activities of a business from the stage of entering
                            the
                            market, building, expanding and creating a unified image of the brand, digital marketing,
                            increasing
                            the competitive advantage and market share to the post-sale stages and creating loyalty among
                            the
                            customers of a brand. is presented</p>
                    </div>
                </div>
        </section>
        );
    }
}

export default AboutSection;