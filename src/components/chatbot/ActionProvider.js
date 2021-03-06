class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    };

    greet() {
      const message = this.createChatBotMessage("Anh (chị) cần em giúp gì ạ");
      this.updateChatbotState(message);
    };

    handleOrder = () => {
        const message = this.createChatBotMessage(
          "Đây là hướng dẫn mua hàng cho Anh (chị) ạ",
          {
            widget: "OrderLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    handleIntroduce = () => {
        const message = this.createChatBotMessage(
          "Đây là phần giới thiệu Website của chúng em ạ",
          {
            widget: "IntroduceLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    handleExchange = () => {
        const message = this.createChatBotMessage(
          "Đây là phần hướng dẫn đổi trả hàng ",
          {
            widget: "ExchangeLinks",
          }
        );
    
        this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
export default ActionProvider;