import React, { Component } from 'react';
import './Parallax_2.css';

class Parallax2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="parallax-2">
                <div className="parallax-content">
                    <div id="parallax-2-title">
                        <h2>Lorem, ipsum dolor</h2>
                    </div>
                    <div id="parallax-2-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempore aliquid
                        illum numquam eius quos, omnis quisquam fuga nihil laudantium soluta inventore qui minus assumenda
                        adipisci officia necessitatibus deserunt iure!</div>
                    <a href="#" id="parallax-2-btn">Lorem, ipsum dolor</a>
                </div>
            </section>
        );
    }
}

export default Parallax2;