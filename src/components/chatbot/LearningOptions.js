import React from "react";

const LearningOptions = (props) => {
    const options = [
        {
          text: "Hướng dẫn mua hàng",
          handler: props.actionProvider.handleOrder,
          id: 1,
        },

        { 
            text: "Giới thiệu về Website", 
            handler: props.actionProvider.handleIntroduce,
            id: 2,
        },

        { 
            text: "Hướng dẫn đổi trả hàng",
            handler: props.actionProvider.handleExchange,
            id: 3,
        },
    ];

    const optionsMarkup = options.map((option) => ( 
        <>
            <button className = "learning-option-button"
            key = { option.id }
            onClick = { option.handler } >
            { option.text } 
            </button>
        </>
    ));

    return <div className = "learning-options-container"> 
                <div className="text-primary small m-0 mb-2">                    
                        Anh (chị) có thể tham khảo 1 số hướng dẫn này cho bớt ngáo đá, hỏi ngu rồi bấm linh tinh ạ, please.
                </div>
                    
                { optionsMarkup } 
            </div>;
};

export default LearningOptions;

