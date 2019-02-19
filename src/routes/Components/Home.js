import React, { Component } from 'react';

import Nav from '../Partials/Nav';
import Landing from './Landing';
class Home extends Component {
    render () {
        return (
            <div>
                <Nav />
                <Landing />
            </div>
        );
    }
}
export default Home;