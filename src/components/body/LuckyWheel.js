import WheelComponent from "react-wheel-of-prizes";
import "react-wheel-of-prizes/dist/index.css";

export default function LuckWheel() {
    const segments = [ "25.000.000đ", "2.500.000 VNĐ", "500.000 VNĐ", "IPHONE 13", "Macbook Pro", "IPAD", "Apple watch", "10.000.000 VNĐ", "5.000.000 VNĐ"];
    const segColors = [ "rgb(224, 63, 125)", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F", "rgb(224, 63, 125)", "#815CD1", "violet", "#017fff" ];
    const onFinished = (winner) => {
        // alert("Chúc mừng bạn đã nhận được: " + winner);

        if(winner ==="Macbook Pro"){
          alert("Chúc mừng bạn đã nhận được con: MacBook Pro xịn sò giá 30.000.000 VNĐ !" );
        }
        else if (winner==="IPAD"){
          alert("Chúc mừng bạn đã nhận được: IPAD giá 8.999.000 VNĐ ! " );
        }

        else if (winner==="25.000.000đ"){
          alert("Chúc mừng bạn đã nhận được: 25.000.000 VNĐ " );
        }

        else if (winner==="2.500.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 2.500.000 VNĐ " );
        }

        else if (winner==="500.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 500.000 VNĐ " );
        }

        else if (winner==="IPHONE 13"){
          alert("Chúc mừng bạn đã nhận được con: Iphone 13 xịn sò giá 49.999.000 VNĐ !" );
        }

        else if (winner==="Apple watch"){
          alert("Chúc mừng bạn đã nhận được: APPLE WATCH giá 17.500.000 VNĐ " );
        }

        else if (winner==="10.000.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 10.000.000 VNĐ " );
        }

        else if (winner==="5.000.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 5.000.000 VNĐ " );
        }
    };
    return ( 
      <>
        <
          WheelComponent 
          segments = { segments }
          segColors = { segColors }
          onFinished = { (winner) => onFinished(winner) }
          primaryColor = "orange"
          contrastColor = "white"
          buttonText = "Quay luôn"
          isOnlyOnce = { false }
          size = { 183 }
          upDuration = { 100 }
          downDuration = { 200 }
          
          />
        </>
    );
}