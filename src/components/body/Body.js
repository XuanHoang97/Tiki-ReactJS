import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Slide from './Slide';
import Category from './Category';
import Preferential from './Preferential';
import SearchSpecial from './SearchSpecial';
import Mobile from './Mobile';

// Chatbot
import Chatbot from 'react-chatbot-kit';
import config from 'components/chatbot/config';
import ActionProvider from 'components/chatbot/ActionProvider';
import MessageParser from 'components/chatbot/MessageParser';

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
                    <Chatbot config={config} actionProvider={ActionProvider} 	messageParser={MessageParser} />

                </div>
            </div>
        );
    }
}

export default Body;