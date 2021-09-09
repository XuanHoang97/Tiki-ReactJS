import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "redux/actions/cart";
import { mobilesState$ } from "redux/selectors";
import * as actions from '../../../redux/actions';
import Rate from "../Rate";

// Pagination
const RenderMobile = (mobile) => {
    const dispatch = useDispatch()
    const handleMobile = (e) => {
        dispatch(addProduct(e))
    }
    
    return (
        <div className="product mt-3 ml-0 mr-0 pb-4 p-3 bg-white text-center">
            <h6 className="text-left">
                <i className="fas fa-mobile-alt mr-1 text-danger mr-3" />
                <span className="text-danger ">ĐIỆN THOẠI NỔI BẬT</span>
            </h6>

            <div className="product__detail row mt-4">
                {mobile.map((mobile, key) => {
                    return (
                        <React.Fragment key={key}>
                            <div className="product--item col-md-3 col-6 pt-3 p-0" >
                                <div onClick={() => handleMobile(mobile)}>
                                    <Link to={`/chi-tiet-san-pham/` + mobile.name + "." + mobile.id + ".html"}>
                                        <img src={mobile.img} alt="mobile" style={{height:'200px'}} />
                                        <h6 className="mt-2 mb-1 text-dark">{mobile.name}</h6>
                                    </Link>
                                </div>
                                <Rate />

                                <div className="price__prod row align-items-center justify-content-center">
                                    <span className="font-weight-bold" style={{color:'red', fontSize:'14px'}}>
                                        {new Intl.NumberFormat("GB-en", {
                                            currency: "VND",
                                            style: "currency",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        }).format(mobile.price)}
                                    </span>

                                    <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-{mobile.sale_off}%</span>
                                    <strike className="small" style={{ color: '#8a8a8a' }}>
                                        {new Intl.NumberFormat("GB-en", {
                                            currency: "VND",
                                            style: "currency",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0
                                        }).format(mobile.price_old)}
                                    </strike>
                                </div>

                                <button type="button" name="" id="" class="AddCart btn btn-success btn-sm btn-block mt-4">
                                    <img src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" alt="" className="mr-2" style={{width: '8%' }} />
                                    Mua ngay
                                </button>

                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

function Mobile() {
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    
    const dispatch = useDispatch()
    const posts = useSelector(mobilesState$)

    const handleClick = (e) => {
        setcurrentPage(Number(e.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    useEffect(() => {
        dispatch(actions.getDataMobile.getDataMobileRequest())
    }, []);

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
            {RenderMobile(currentItems)}
            <ul className="pageNumbers">
                <li> <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false} > <i className="fas fa-chevron-left"></i> </button> </li>

                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                    <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false} > <i className="fas fa-chevron-right"></i> </button>
                </li>
            </ul>
        </>
    );
}
export default Mobile;