class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("halu")) {
            this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("dmm") || lowerCaseMessage.includes("dcmm") || lowerCaseMessage.includes("dkmm") || lowerCaseMessage.includes("dkbm") || lowerCaseMessage.includes("dbm")) {
            this.actionProvider.greet1();
        }

        if (lowerCaseMessage.includes("hdmh")) {
            this.actionProvider.handleOrder();
        }
    }
}

export default MessageParser;