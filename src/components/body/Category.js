import React, { useState, useEffect } from "react";
import axios from "axios"; //Sử dụng axios

export default function Category(props) {
    const [listCategory, setListCatg] = useState([]);
    useEffect(() => {
        const getCategoryAPI = 'https://y6896.sse.codesandbox.io/category_special'
        axios.get(getCategoryAPI).then((res) => {
            if (res.request.status === 200) {
                setListCatg(res.data)
            }
        })
            .catch((err) => { console.log(err); alert("Lỗi không load được sản phẩm từ Api"); })
    }, [])
    var dem = 1;
    return (

        <div className="category__hightlight mt-3 p-3 bg-white">
            <h6><span className="text-danger">DANH MỤC NỔI BẬT</span></h6>

            <div className="list__category pt-4 pb-2 row">
                {listCategory ? listCategory.map((ctg) => {
                    if (dem <= 6) {
                        dem++;
                        return (
                            <React.Fragment key={ctg.id}>
                                <div className="col-md-2 col-4 text-center">
                                    <img className="w-50 rounded-circle" src={ctg.img} alt="" />
                                    <h6 className="small pt-2" style={{ fontSize: '12px' }}>{ctg.content}</h6>
                                </div>
                            </React.Fragment>
                        );
                    } else {
                        return '';
                    }
                }) :
                    <div className="loader">Loading</div>
                }
            </div>
        </div>
    );

}