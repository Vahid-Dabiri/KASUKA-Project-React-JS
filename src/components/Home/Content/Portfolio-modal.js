import React, { Component } from 'react';
import './Portfolio-modal.css';

class PortfolioModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="img-modal-container">
                {this.props.children}
                <div className="modal-infos">
                    <h2 className="modal-name">{this.props.title}</h2>
                    <h4 className="modal-category">{this.props.category}</h4>
                </div>
            </div>
        );
    }

}

export default PortfolioModal;