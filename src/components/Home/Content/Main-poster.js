import React, { Component } from 'react';
import $ from 'jquery';
import {MdOutlineStorefront} from 'react-icons/md';
import {RiBarChartBoxLine} from 'react-icons/ri';
import {BsFillCalendarWeekFill} from 'react-icons/bs';
import {RiPaintBrushFill} from 'react-icons/ri';
import {ImDatabase} from 'react-icons/im';
import './Main-poster.css';
import ListIcon from './List-icon';

class MainPoster extends Component {
    constructor(props) {
        super(props);
        this.state={
            buttonsInfo: [
                {
                    id:1,
                    icon:<MdOutlineStorefront />,
                    title:'Dramatic Text',
                    href:"#"
                },
                {
                    id:2,
                    icon:<RiBarChartBoxLine />,
                    title:'Qualitative Chart',
                    href:"#"
                },
                {
                    id:3,
                    icon:<BsFillCalendarWeekFill />,
                    title:'Portfolio',
                    href:"#"
                },
                {
                    id:4,
                    icon:<RiPaintBrushFill />,
                    title:'Final Functions',
                    href:"#"
                },
                {
                    id:5,
                    icon:<ImDatabase />,
                    title:'Saved Data',
                    href:"#"
                },
            ]
        }
    }
    render() {
        return (
            <section className="parallax" id="hero">
                <div className="container">
                    <h1>Powerful Digital Solutions With <br /><span>Kasuka</span></h1>
                    <h2>We are a Team of Talented Digital Marketers</h2>

                    <div className="buttons">
                        {this.state.buttonsInfo.map(item => {
                            return(
                                <ListIcon key={item.id} link={item.title} target={item.href} icon={item.icon} />
                            )
                        })}
                    </div>
                </div>

            </section>
        );
    }
}

export default MainPoster;