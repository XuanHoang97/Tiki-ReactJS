class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("") || lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            this.actionProvider.greet();
        };

        if (lowerCaseMessage.includes("hdmh")) {
            this.actionProvider.handleOrder();
        };
    }
}

export default MessageParser;