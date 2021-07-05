import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import axios from "axios";

const Prod_info = ({ match }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile/?id=${match.params.id}`)
        .then((res) => { setData(res.data); console.log(res.data); })
        .catch((err) => console.log(err));
    };
    return (
        <div className="col-md-3 p-0 text-left">
            {data.map((item, key) => {
                return (
                    <React.Fragment key={item.id}>
                        <img className="w-75" src={item.img} alt="" />
                        
                        {/* <img className="w-75 mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSewLCELqmdHXdDSpFpHlKQPplJlYLdZD7XFp2XGEJDV_S5U-XkdQ5hxFzTJ0or27LvDAU&usqp=CAU" alt="" /> */}

                        <div className="row mt-2 m-0">
                            <div className="col-md-3 col-3 border border-light p-1">
                                <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail02.png?alt=media&token=c931c715-0279-481f-a921-d8a0b07b7606" alt="" />
                            </div>
                            <div className="col-md-3 col-3 border border-light p-1">
                                <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail03.png?alt=media&token=267b8976-db73-48f5-be47-f9b4a17d1c8e" alt="" />
                            </div>
                            <div className="col-md-3 col-3 border border-light p-1">
                                <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail02.png?alt=media&token=c931c715-0279-481f-a921-d8a0b07b7606" alt="" />
                            </div>
                            <div className="col-md-3 col-3 border border-light p-1">
                                <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail03.png?alt=media&token=267b8976-db73-48f5-be47-f9b4a17d1c8e" alt="" />
                            </div>
                        </div>
                    </React.Fragment>
                );
            })}
            
            <p className="text-left mt-4 mb-0 bg-danger text-white p-1 pl-3 pr-3 w-75 rounded">Đặc điểm nổi bật</p> 
            <div className="special">
                <ul className="p-3">
                <li className="small text-left mb-2">Hai màn hình HD+ mở rộng tối đa không gian trải nghiệm hình ảnh</li>
                <li className="small text-left mb-2">Thân máy hoàn thiện đường gập tối ưu</li>
                <li className="small text-left mb-2">Sạc nhanh siêu tốc 15W giúp nạp đầy năng lượng nhanh chóng</li>
                <li className="small text-left mb-2">Dung lượng pin lớn 4500mAh thoải mái trải nghiệm cả ngày dài</li>
                <li className="small text-left mb-2">3 camera sau 12MP + 12MP + 12MP hỗ trợ chụp ảnh đa tính năng</li>
                </ul>
            </div>
        </div>
    );
}

export default Prod_info;