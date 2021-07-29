import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search_special(props) {
    const [listSearch, setListSearch] = useState([]);
    useEffect(() => {
        const getSearchAPI = 'https://y6896.sse.codesandbox.io/search_special'
        axios.get(getSearchAPI).then((res) => { setListSearch(res.data); })
            .catch((err) => { console.log(err); alert("Lỗi không load được sản phẩm từ Api"); })
    }, [])

    return (
        <div className="search__hightlight mt-3 p-3 bg-white">
            <div className="row justify-content-between pl-3 pr-3">
                <div>
                    <h5 className="text-danger">
                        <img src="https://salt.tikicdn.com/ts/upload/c5/0e/02/23066556738e7f5df8b8fde5d0d1dfd6.png" style={{ width: '10%' }} alt="" /> TÌM KIẾM NỔI BẬT
                    </h5>
                </div>
                <div className="view--more text-primary">
                    <i className="fas fa-sync-alt mr-1" />
                    <span>XEM THÊM</span>
                </div>
            </div>

            <div className="list__search pt-4 pb-2 pl-3 pr-3 row">
                {listSearch.map((search) => {
                    return (
                        <React.Fragment key={search.id}>
                            <div className="card col-md-3 border-grey p-0 mb-2">
                                <div className="card-body pl-0 pr-0 pt-2 pb-0">
                                    <div className="illutrator row m-1">
                                        <img className="col-md-4 col-4 p-0" src={search.img1} alt="" />
                                        <img className="col-md-4 col-4 p-0" src={search.img2} alt="" />
                                        <img className="col-md-4 col-4 p-0" src={search.img3} alt="" />
                                    </div>
                                    <div className="info mt-2 pt-2 pl-3 pb-2" style={{ background: search.bg }}>
                                        <h5 className="card-text small font-weight-bold">{search.content}</h5>
                                        <span className="small text-secondary">{search.number} sản phẩm</span>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );

}
