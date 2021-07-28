import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Slide from './Slide';
import Category from './Category';
import Preferential from './Preferential';
import Search_special from './Search_special';
import Mobile_ctg from './Mobile_ctg';

import Mail from './Mail';
class Body extends Component {
    render() {
        return (
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    <Slide />
                    
                    <Category />
                    
                    <Preferential/>

                    <Search_special />
                    
                    <Mobile_ctg />

                    <Mail />
                </div>
            </div>
        );
    }
}

export default Body;