import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Slide from './Slide';
import Category from './Category';
import Preferential from './Preferential';
import SearchSpecial from './SearchSpecial';
import Mobile from './Mobile';

import Mail from './Mail';
import ProductSuggestion from './ProductSuggestion';
class Body extends Component {
    render() {
        return (
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    <Slide />

                    <Category />

                    <Preferential />

                    <SearchSpecial />

                    <Mobile />

                    <ProductSuggestion />
                    <Mail />
                </div>
            </div>
        );
    }
}

export default Body;