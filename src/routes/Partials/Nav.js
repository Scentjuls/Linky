import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './../../index.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
               <nav>
                    <div className="nav-wrapper grey lighten-5">
                    <a href="/" className="brand-logo center grey-text text-darken-3">Linky</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large"><i className="fa fa-bars"></i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/pricing"><i className="grey-text text-darken-3 fas fa-money-bill-alt nav-contents">Pricing</i></Link></li>
                        <li><Link to="/help"><i className="grey-text text-darken-3 fas fa-hands-helping nav-contents">Help</i></Link></li>
                        <li><Link to="/login"><i className="grey-text text-darken-3 fa fa-users nav-contents">Login</i></Link></li> 
                        <li><a href="/" className="waves-effect waves-light btn capitalize ">Sign Up Free</a></li>
                    </ul>
                    <ul className="side-nav" id="main-menu">
                        <li><Link to="/pricing"><i className="grey-text text-darken-3 fa fa-users">Pricing</i></Link></li>
                        <li><Link to="/help"><i className="grey-text text-darken-3 fa fa-plus">Help</i></Link></li>
                        <li><Link to="/login"><i className="grey-text text-darken-3 fa fa-question-circle">Login</i></Link></li> 
                        <li><a href="/" className="waves-effect waves-light btn capitalize">Sign Up Free</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;