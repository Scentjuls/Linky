import React, { Component } from 'react';

import Nav from '../Partials/Nav';
import Landing from './Landing';
import How from './How';
import Section from './Section3';
import Footer from './Footer';
class Home extends Component {
    render () {
        return (
            <div>
                <Nav />
                <Landing />
                <How />
                <Section />
                <Footer />
            </div>
        );
    }
}
export default Home;