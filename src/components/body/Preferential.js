import React, { useState, useEffect } from "react";
import axios from "axios"; //Sử dụng axios

export default function Preferential(props) {
    const [listPreferent, setListPreferent] = useState([]);
    useEffect(() => {
        const getPreferentAPI = 'https://y6896.sse.codesandbox.io/preferent'
        axios.get(getPreferentAPI).then((res) => { setListPreferent(res.data); })
            .catch((err) => { console.log(err); alert("Lỗi không load được sản phẩm từ Api"); })
    }, [])

    var dem = 1;

    return (
        <div className="row bg-white mt-3 p-3 m-0">
            {listPreferent.map((pref, index) => {
                if (dem <= 12) {
                    dem++;
                    return (
                        <React.Fragment key={pref.id}>
                            <div className="col-md-1 col-3">
                                <img className="w-75" src={pref.img} alt="" />
                                <p className="small mt-2">{pref.content}</p>
                            </div>
                        </React.Fragment>
                    );
                }
            })}
        </div>
    );
}
