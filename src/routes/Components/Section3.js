import React, { Component } from 'react';

class Section extends Component {
    render () {
        return (
            <div className="section3">
                <div className="row">
                    <div className="section_description">
                        <div className="col l4 m4 s12 exact">
                            <i className="fas fa-plane fa-3x exact-icons"></i>
                            <h4> One bio for all</h4>
                            <p>Help your followers discover all of your recent content</p>
                        </div>
                        <div className="col l4 m4 s12 exact">
                            <i className="fas fa-plane fa-3x exact-icons"></i>
                            <h4> Multiple destinations </h4>
                            <p>Send followers anywhere: articles, webstore, events, socials and more.</p>
                        </div>
                        <div className="col l4 m4 s12 exact">
                            <i className="fas fa-plane fa-3x exact-icons"></i>
                            <h4> Easily managed</h4>
                            <p>Paste in new URLs, then drag and drop the links to reorder</p>
                        </div>
                    </div>
                </div>
                <div className="exactly-btns">
                    <a href="/" className="waves-effect waves-light btn capitalize exatly-btn">Its exactly what i need!</a>
                </div>
            </div>
        );
    }
}
export default Section;