import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import NumberFormat from 'react-number-format';
import '../../assets/css/mobile.scss';

// Pagination
// Render UI Mobile
const renderMobile= (mobile) => {
    return (
        <div className="product mt-3 ml-0 mr-0 p-3 bg-white text-center">
            <h6 className="text-left">
                <i className="fas fa-mobile-alt mr-1 text-danger mr-3" />
                <span className="text-danger ">ĐIỆN THOẠI NỔI BẬT</span>
            </h6>

            <div className="product__detail row mt-5">
                {mobile.map( (mobile,key) => {
                    return (
                    <React.Fragment key={key}>
                        <div className="product--item col-md-3 col-6">
                            <Link to={`/chi-tiet-san-pham/${mobile.id}` + mobile.name +"." + mobile.id + ".html"}>
                                <img src={mobile.img} alt="mobile" />
                                <h6 className="mt-4 mb-1 text-darkgrey">{mobile.name}</h6>
                            </Link>


                            <div className="rate mb-3">
                                <span className="fa fa-star checked text-warning small" />
                                <span className="fa fa-star checked text-warning small" />
                                <span className="fa fa-star checked text-warning small" />
                                <span className="fa fa-star text-secondary small" />
                                <span className="fa fa-star text-secondary small" />
                            </div>
                            <span className="badge badge-pill badge-danger pt-2 pb-2 pl-3 pr-3">
                            {new Intl.NumberFormat("GB-en", {
                                currency: "VND",
                                style: "currency",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(mobile.price)}
                        
                            </span>
                            <span className="badge badge-pill badge-warning p-2 ml-2 mr-2">-{mobile.sale_off} %</span>
                            <strike className="small" style={{ color: '#8a8a8a' }}>
                                {new Intl.NumberFormat("GB-en", {
                                    currency: "VND",
                                    style: "currency",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0
                                }).format(mobile.price_old)}
                            </strike>
                            <div className="config bg-light rounded mt-3 ml-1 mr-1 mb-3 pt-2 pb-2 pl-2 pr-2 row">
                            <div className="chip border border-default mb-1 mr-1 rounded col-md-8">
                                <small> {mobile.chip}</small>
                            </div>
                
                            <div className="chip border border-default rounded col-md-4">
                                <small>{mobile.screen} ''</small>
                            </div>
                            <div className="chip border border-default rounded col-md-4">
                                <small>{mobile.ram} GB</small>
                            </div>
                            <div className="chip border border-default rounded col-md-4">
                                <small>{mobile.rom} GB</small>
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

// Handle logic: Call api & make pagination
function Mobile() {
    const [mobile, setMobile] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(4);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (e) => {
        setcurrentPage(Number(e.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(mobile.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = mobile.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
            <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active" : null} >
                {number}
            </li>
        );
        } else {
        return null;
        }
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
        .get('https://y6896.sse.codesandbox.io/product_mobile/')
        .then(res => { setMobile(res.data); })
        .catch((err) => { console.log(err); });
    };

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    //pagination ui
    return (
        <>
        {renderMobile(currentItems)}
        <ul className="pageNumbers">
            <li className="mr-2"> <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false} > <i class="fas fa-chevron-left"></i> </button> </li>

            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <li className="ml-2">
            <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false} > <i class="fas fa-chevron-right"></i> </button>
            </li>
        </ul>
        </>
    );
}

export default Mobile;