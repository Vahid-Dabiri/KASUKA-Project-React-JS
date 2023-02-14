import React, { Component } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { BsJournalRichtext } from 'react-icons/bs';
import { BsAward } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import './Count-section.css';
import ListIcon from './List-icon';

class CountSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countItemInfo: [
                {
                    id: 1,
                    icon: <BsEmojiSmile />,
                    countNum: 65,
                    title: "Satisfied Customers",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, provident?"
                },
                {
                    id: 2,
                    icon: <BsJournalRichtext />,
                    countNum: 85,
                    title: "Projects",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, provident?"
                },
                {
                    id: 3,
                    icon: <AiOutlineClockCircle />,
                    countNum: 35,
                    title: "Years of Experience", 
                    text:"Lorem ipsum dolor, sit amet consectetur. Voluptate, provident?"
                },
                {
                    id: 4,
                    icon: <BsAward />,
                    countNum: 20,
                    title: "Awards",
                    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, provident?"
                },
            ]
        }
    }
    render() {
        return (
            <section id="count-section">
                <div id="count-img">
                    <img src="./images/counts-img.jpg" alt="counter section" />
                </div>
                <div id="count-lists">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p id="count-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui mollitia inventore in odio quasi? Esse iure
                        porro consequatur explicabo eius.</p>

                    <div id="count-items">
                        {this.state.countItemInfo.map(item => {
                            return (
                        <ListIcon key={item.id} icon={item.icon} head={item.countNum} title={item.title} text={item.text} />
                            )
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default CountSection;