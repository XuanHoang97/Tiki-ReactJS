import React, { useState, useEffect } from "react";
import axios from "axios"; //Sử dụng axios

export default function Preferential(props) {
    const [listPreferent, setListPreferent] = useState([]);
    useEffect(() => {
        const getPreferentAPI = 'https://y6896.sse.codesandbox.io/preferent'
        axios.get(getPreferentAPI).then((res) => { setListPreferent(res.data); })
            .catch((err) => { console.log(err); alert("Lỗi không load được sản phẩm từ Api"); })
    }, [])

    let dem = 1;

    return (
        <div className="voucher row bg-white mt-3 pt-3 p-2 m-0">
            {listPreferent.map((pref, index) => {
                if (dem <= 12) {
                    dem++;
                    return (
                        <React.Fragment key={pref.id}>
                            <div className="col-md-1 col-3 p-1 text-center" style={{cursor:'pointer'}}>
                                <img className="w-50" src={pref.img} alt="" />
                                <p className="small mt-2 mb-0">{pref.content}</p>
                            </div>
                        </React.Fragment>
                    );
                }
            })}
        </div>
    );
}
