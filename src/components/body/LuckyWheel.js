import WheelComponent from "react-wheel-of-prizes";
import "react-wheel-of-prizes/dist/index.css";

export default function LuckWheel() {
    const segments = [ "Coco Chanel", "Son Dior", "500.000 VNĐ", "IPHONE 13", "Macbook Pro", "IPAD PRO", "Apple watch", "5.000.000 VNĐ", "Nhẫn LOTR"];
    const segColors = [ "orange", "rgb(0, 190, 190)", "#815CD1", "violet", "#017fff", "orange", "#815CD1", "violet", "#017fff" ];
    const onFinished = (winner) => {
        // alert("Chúc mừng bạn đã nhận được: " + winner);

        if(winner ==="Macbook Pro"){
          alert("Chúc mừng bạn đã nhận được con: MacBook Pro 2021 xịn sò giá 32.490.000 VNĐ !" );
        }
        else if (winner==="IPAD"){
          alert("Chúc mừng bạn đã nhận được: IPAD giá 8.999.000 VNĐ ! " );
        }

        else if (winner==="Coco Chanel"){
          alert("Chúc mừng bạn đã nhận được: 1 lọ nước hoa Chanel giá 4.950.000 VNĐ " );
        }

        else if (winner==="Son Dior Rouge"){
          alert("Chúc mừng bạn đã nhận được 1 thỏi Son Dior Rouge giá 1.500.000 VNĐ " );
        }

        else if (winner==="500.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 500.000 VNĐ " );
        }

        else if (winner==="IPHONE 13"){
          alert("Chúc mừng bạn đã nhận được con: Iphone 13 Pro Max v.256GB xịn sò giá 49.999.000 VNĐ !" );
        }

        else if (winner==="Apple watch"){
          alert("Chúc mừng bạn đã nhận được: APPLE WATCH giá 17.590.000 VNĐ " );
        }

        else if (winner==="5.000.000 VNĐ"){
          alert("Chúc mừng bạn đã nhận được: 5.000.000 VNĐ " );
        }

        else if (winner==="Nhẫn LOTR"){
          alert("Chúc mừng bạn đã nhận được: 1 chiếc nhẫn chúa có sức mạnh thao túng tất cả vạn vật " );
        }
    };
    return ( 
      <>
        <
          WheelComponent 
          segments = { segments }
          segColors = { segColors }
          onFinished = { (winner) => onFinished(winner) }
          primaryColor = "rgb(240, 73, 12)"
          contrastColor = "white"
          buttonText = "QUAY"
          isOnlyOnce = { false }
          size = { 183 }
          upDuration = { 100 }
          downDuration = { 200 }
          
          />
        </>
    );
}