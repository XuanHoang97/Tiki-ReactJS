import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from './LearningOptions';

const config = {
initialMessages: [
    createChatBotMessage("Xin chào, Tôi ở đây là để giúp bạn. Bạn muốn học gì nhỉ ?", {
      widget: "learningOptions",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
 ],
}


// const config = { 
//     botName: "LearningBot",
//     initialMessages: [createChatBotMessage("Xin chào, Tôi ở đây là để giúp bạn. Bạn muốn học gì nhỉ ?")],
//     customStyles: {
//       botMessageBox: {
//         backgroundColor: "#2898ec",
//       },
//       chatButton: {
//         backgroundColor: "#2898ec",
//       },
//     },
//   }


export default config;