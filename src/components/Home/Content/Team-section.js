import React, { Component } from 'react';
import SectionTitle from './Section-title';
import TeamMember from './Team-member';
import './Team-section.css';

class TeamSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamInfo: [
                {
                    id: 1,
                    image: './images/team-1.jpg',
                    name: 'Walter White',
                    job: 'Chief executive officer',
                    instagram: 'https://www.instagram.com',
                    linkedin: 'https://www.linkedin.com',
                    facebook: 'https://www.facebook.com',
                    twitter: 'https://www.twetter.com'
                },
                {
                    id: 2,
                    image: './images/team-2.jpg',
                    name: 'Sarah Johnson',
                    job: 'production manager',
                    instagram: 'https://www.instagram.com',
                    linkedin: 'https://www.linkedin.com',
                    facebook: 'https://www.facebook.com',
                    twitter: 'https://www.twetter.com'
                },
                {
                    id: 3,
                    image: './images/team-3.jpg',
                    name: 'William Anderson',
                    job: 'CTO',
                    instagram: 'https://www.instagram.com',
                    linkedin: 'https://www.linkedin.com',
                    facebook: 'https://www.facebook.com',
                    twitter: 'https://www.twetter.com'
                },
                {
                    id: 4,
                    image: './images/team-4.jpg',
                    name: 'Amanda Jepson',
                    job: 'Counter',
                    instagram: 'https://www.instagram.com',
                    linkedin: 'https://www.linkedin.com',
                    facebook: 'https://www.facebook.com',
                    twitter: 'https://www.twetter.com'
                },
            ]
        }
    }
    render() {
        return (
            <section id="team-section">
                <SectionTitle title="Team" head="Check Our Team" />
                <div id="team-members">
                    {this.state.teamInfo.map(item => {
                        return (<TeamMember image={item.image} name={item.name} 
                            instagram={item.instagram} facebook={item.facebook} 
                            twitter={item.twitter} linkedin={item.linkedin} 
                            job={item.job} id={item.id} key={item.id}/>)
                    })}
                </div>
            </section>
        );
    }
}

export default TeamSection;