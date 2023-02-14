import React, { Component } from 'react';
import ListIcon from './List-icon';
import {SlLocationPin} from 'react-icons/sl';
import {BsPhone} from 'react-icons/bs';
import {TfiEmail} from 'react-icons/tfi';
import SectionTitle from './Section-title';
import './Form-section.css';

class FormSection extends Component {
    constructor(props) {
        super(props);
        this.state={
            contactInfo: [
                {
                    id:1,
                    icon: <SlLocationPin />,
                    title: 'Address:',
                    text: 'Tehran Azadi Street'
                },
                {
                    id:2,
                    icon: <TfiEmail />,
                    title: 'Email:',
                    text: 'info@example.com'
                },
                {
                    id:3,
                    icon: <BsPhone />,
                    title: 'Phone Number:',
                    text: '0123467889'
                }
            ]
        }
    }
    render() {
        return (
            <section id="contact-us">
                <SectionTitle title="Contact Us" head="Contact With Us" />
                <div id="contact-infos">
                    <div id="contact-list">
                        {this.state.contactInfo.map(item => {
                            return(
                                <ListIcon key={item.id} icon={item.icon} head={item.title} text={item.text} />
                            )
                        })}
                    </div>
                    <div id="contact-form">
                        <form action="">
                            <input id="message-name" type="text" placeholder="Name" required />
                            <input id="message-email" type="email" name="email" placeholder="Email" required />
                            <input id="message-title" type="text" placeholder="Title" />
                            <textarea name="text-area" id="text-area" cols="10" rows="10" placeholder="Text"></textarea>
                            <div id="form-btn"><button>Send Message</button></div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default FormSection;