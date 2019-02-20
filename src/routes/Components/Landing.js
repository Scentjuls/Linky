import React, { Component } from 'react';

import '../../index.css';
import LandingImage from '../../assets/undraw_buffer_wq43.png'
class Landing extends Component {
    render() {
        return (
            <div className="row landing-row">
                <div className="col l7 m7 s12">
                    <div className="image">
                        <img className= "buffer" src={LandingImage} alt =""/> 
                    </div>
                </div>
                <div className="col l5 m5 s12 side-content">
                    <h3 className="content" > You get only one chance to link your twitter. Make it do more.</h3>
                    <a href="/" className="waves-effect waves-light btn capitalize twitter-btn">Sign Up With Twitter</a>
                </div>
          </div>
                       
        );
    }
}

export default Landing;