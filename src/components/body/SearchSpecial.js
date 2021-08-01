import React, { useState, useEffect } from "react";
import axios from "axios";

const renderProduct = (data) => {
    return (
        <div className="search__hightlight mt-0 pl-3 pb-2 p-0 bg-white" style={{paddingRight:'5px'}}>
            <div className="list__search pt-0 pb-2 pl-3 pr-3 row">
                {data.map((search) => {
                    return (
                        <React.Fragment key={search.id}>
                            <div className="card col-md-3 p-0" style={{border: 'none', cursor: 'pointer'}}>
                                <div className="card-body pl-0 pr-0 pt-2 pb-0" style={{borderRadius:'5px', border:'1px solid rgb(230 230 230)', marginRight:'15px'}}>
                                    <div className="illutrator row m-1">
                                        <img className="col-md-4 col-4 p-0" src={search.img1} alt="" />
                                        <img className="col-md-4 col-4 p-0" src={search.img2} alt="" />
                                        <img className="col-md-4 col-4 p-0" src={search.img3} alt="" />
                                    </div>
                                    <div className="info mt-2 pt-2 pl-3 pb-2" style={{ background: search.bg }}>
                                        <h5 className="card-text small font-weight-bold mb-0">{search.content}</h5>
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
};

// Handle logic:
function Search_special() {
    const [mobile, setMobile] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(4);

    const pages = [];
    for (let i = 1; i <= Math.ceil(mobile.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mobile.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        axios
            .get('https://y6896.sse.codesandbox.io/search_special')
            .then(res => { setMobile(res.data); })
            .catch((err) => { console.log(err); });
    }, []);

    const handleNextbtn = () => {
        console.log(currentPage)
        console.log(mobile.length)
        if (currentPage > mobile.length / itemsPerPage - 1) {
            setcurrentPage(1)
        } else {
            setcurrentPage(currentPage + 1);

        }
    };

    return (
        <>
            <div className="mt-3 bg-white m-0 pt-3 pb-1 row justify-content-between pl-3 pr-3 align-items-center">
                <div className="">
                    <h6 className="text-danger">
                        <img src="https://salt.tikicdn.com/ts/upload/c5/0e/02/23066556738e7f5df8b8fde5d0d1dfd6.png" style={{ width: '10%' }} alt="" /> TÌM KIẾM NỔI BẬT
                    </h6>
                </div>
                <div className="view--more text-primary" onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
                    <i className="fas fa-sync-alt mr-2" />
                    <span className="small">XEM THÊM</span>
                </div>
            </div>
            {renderProduct(currentItems)}
        </>
    );
}
export default Search_special;

