import React, { Component } from 'react';
import ListIcon from './List-icon';
import SectionTitle from './Section-title';
import {BiTachometer} from 'react-icons/bi';
import {BiArch} from 'react-icons/bi';
import {BiSlideshow} from 'react-icons/bi';
import {BiWorld} from 'react-icons/bi';
import {AiOutlineFileText} from 'react-icons/ai';
import {BsDribbble} from 'react-icons/bs';
import './Services.css';

class ServicesSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            servicesInfo:[
                {
                    id:1,
                    icon: <BiTachometer />,
                    title: 'Title 1',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam ad labore!',
                },
                {
                    id:2,
                    icon: <AiOutlineFileText />,
                    title: 'Title 2',
                    text: 'Lorem ipsum dolor sit amet.',
                },
                {
                    id:3,
                    icon: <BsDribbble />,
                    title: 'Title 3',
                    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, unde.',
                },
                {
                    id:4,
                    icon: <BiArch />,
                    title: 'Title 4',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat.',
                },
                {
                    id:5,
                    icon: <BiSlideshow />,
                    title: 'Title 5',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, distinctio praesentium laboriosam veniam quia reiciendis!',
                },
                {
                    id:6,
                    icon: <BiWorld />,
                    title: 'Title 6',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, neque!',
                }
            ]
        }
    }
    render() { 
        return (
            <section id="services" className='section'>
            <SectionTitle title='Services' head='Check Our Services' />
            <div id="services-items">
                {this.state.servicesInfo.map(item => {
                    return(
                        <ListIcon key={item.id} icon={item.icon} head={item.title} text={item.text} />
                    )
                })}
            </div>
        </section>
        );
    }
}
 
export default ServicesSection;