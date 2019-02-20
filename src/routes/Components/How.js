import React, { Component } from 'react';

import PhoneImage from '../../assets/undraw_android_jr64.png';

class How extends Component {
    render () {
        return (  
            <div className="row how-row">
            <div className="col l6 m6 s12">
                <div className="image">
                    <img className= "andriod" src={PhoneImage} alt =""/> 
                </div>
            </div>
            <div className="col l6 m6 s12 how-content">
                <h4 className="how-works"> How it works.</h4>
                <p> Linky is a tool for optimizing your twitter feeds, whether you are a blogger, artist or you run  content 
                    platform.</p> <br/><p>You will get one bio link to house all your contents and drive followers to your door.</p>
                    <br/><p> Let your content live longer than the feed.
                </p>
                <div className= "how-btns">
                    <a href="/" className="waves-effect waves-light btn capitalize how-btn">Sign Up Free</a>
                </div>
            </div>
      </div>
        );
    }
}
export default How;