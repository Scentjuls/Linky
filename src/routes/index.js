import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import '../index.css'
import Home from './Components/Home';


export default () => 
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact render= {() => < Home/>} />
        </Switch>
    </BrowserRouter>);
