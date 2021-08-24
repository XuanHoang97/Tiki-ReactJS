import React, { useState, useRef} from 'react';
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
import LuckyWheel from './LuckyWheel';
import useOutsideClick from 'components/useOutsideClick';

export default function Body() {
    const [chatbot, setChatbot]= useState(false);
    const [lucky, setLucky]= useState(false);
    const ref = useRef();

    useOutsideClick(ref, () => {
        if (chatbot) setChatbot(false);
    });

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

                {/* Lucky Wheel */}
                <div className="LuckyWheel" onClick={() => {setLucky(!lucky)}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCoasT2bQThAGlar2I5RrPEFYZba00VUDBMN0FFz6mwJTk73Oo2lRxuAEuY3-AJGQuqt0&usqp=CAU" className="lucky" />
                </div>
                <div className="spin"><img src="https://www.webtretho.com/static/img/luckyspin/title_1.png" alt="" /></div> 
                
                {lucky &&  <LuckyWheel/> }

                {/* Build Chatbot */}
                <div className="chatbotTest" onClick={() => {setChatbot(!chatbot)}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5LV5FEwLk2UGd5-UApCpu7yuOMV7cAKDFKTofRzlzxdT3wKd3pAPBc_KzhnWFuhowFI&usqp=CAU" alt="ko hien anh" />
                </div>
                
                {chatbot && 
                    <div className="chatbot bg-white" ref={ref} >
                        <Chatbot config={config} actionProvider={ActionProvider}  messageHistory={loadMessages()} saveMessages={saveMessages}	messageParser={MessageParser} />
                    </div>
                }
            </div>
        </div>
    );
}