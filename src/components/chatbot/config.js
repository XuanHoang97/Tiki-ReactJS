import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from './LearningOptions';
import LinkList from "./LinkList";

const botName = "Katty Hatheway";
const config = {
    botName: botName,
    lang: "vi",
    
    initialMessages: [
        createChatBotMessage("Haluuu, em là Chatbot do anh Hoàng tạo ra, Anh (chị) cần giúp đỡ gì thì cứ hỏi em ạ", {
        widget: "learningOptions",
        }),
    ],
 
    widgets: [
    {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
    },

    {
        widgetName: "OrderLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
            {
                text: "Hướng dẫn mua hàng nhanh mà lại chất lượng",
                url:
                "https://www.youtube.com/watch?v=LIIDh-qI9oI",
                id: 1,
            },
            {
                text: "Hướng dẫn tìm kiếm sản phẩm Sang-sịn-mịn",
                url:
                "https://www.youtube.com/watch?v=Kma3NpC3JKQ",
                id: 2,
            },
            {
                text: "Danh sách sản phẩm ngon-bổ-rẻ",
                url: "https://www.youtube.com/watch?v=SQ0FrpZ182Q",
                id: 3,
            },
            ],
        },
    },

    {
        widgetName: "IntroduceLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                text: "Website dựa trên ý tưởng: Clone lại Web Tiki với React và Redux, trong tương lai sẽ tiến tới việc thương mại hoá.  ",
                
                id: 1,
                },
            ],
            },
    },

    {
        widgetName: "ExchangeLinks",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
            options: [
                {
                text: "Mua rồi éo cho đổi nữa :v ",
                url:
                    "https://www.youtube.com/watch?v=LIIDh-qI9oI",
                id: 1,
                },
            ],
        },
    },
 ],
}

export default config;