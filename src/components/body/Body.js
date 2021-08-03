import React, { useState} from 'react';
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
function Body(props) {
    const [chatbot, setChatbot]= useState(false);

    // Save Dialogue in the Chatbot
    const saveMessages = (messages) => {
        localStorage.setItem("chat_messages", JSON.stringify(messages));
    };
    
    const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
    };

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

                {/* Build Chatbot */}
                <div className="chatbotTest" onClick={() => {setChatbot(!chatbot)}}>
                    <img src="https://image.voso.vn/users/vosoimage/images/73ad6fb32257eab0a40c3987f118b03c?t%5B0%5D=compress%3Alevel%3D100&accessToken=a4d3879e76716b5ba558f6ed73e480601257169613b05f38ba45ebaf64741361" alt=""  title="ChatBot Ironman" />
                </div>
                
                {chatbot && 
                    <div className="chatbot bg-white p-3">
                        <Chatbot config={config} actionProvider={ActionProvider}  messageHistory={loadMessages()} saveMessages={saveMessages}	messageParser={MessageParser} />
                    </div>
                }

            </div>
        </div>
    );
}

export default Body;
