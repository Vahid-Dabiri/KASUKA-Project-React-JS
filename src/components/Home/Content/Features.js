import React, { Component } from 'react';
import { CgNotes } from 'react-icons/cg';
import { BiCubeAlt } from 'react-icons/bi';
import { ImImages } from 'react-icons/im';
import { BsShield } from 'react-icons/bs';
import ListIcon from './List-icon';
import './Features.css';

class FeaturesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featureInfo: [
                {
                    id: 1,
                    icon: <CgNotes />,
                    title: 'Lorem-1',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, laudantium! Lorem ipsum dolor sit amet consectetur.'
                },
                {
                    id: 2,
                    icon: <BiCubeAlt />,
                    title: 'Lorem-2',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, laudantium!'
                },
                {
                    id: 3,
                    icon: <ImImages />,
                    title: 'Lorem-3',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, laudantium! adipisicing elit.'
                },
                {
                    id: 4,
                    icon: <BsShield />,
                    title: 'Lorem-4',
                    text: 'Lorem ipsum dolor sit , adipisicing elit. Perspiciatis, laudantium!'
                },
            ]
        }
    }
    render() {
        return (
            <section id="features">
                <div id="feature-img">
                    <img src="./images/features.jpg" />
                </div>
                <div id="features-container">
                    {this.state.featureInfo.map(item => {
                        return (
                            <ListIcon key={item.id} icon={item.icon} head={item.title} text={item.text} />
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default FeaturesSection;