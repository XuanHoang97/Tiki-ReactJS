import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { BrowserRouter as  Link} from "react-router-dom";
// import NumberFormat from 'react-number-format';
import Pagination from './Pagination';

// Call api 
const Mobile = () => {
    // var NumberFormat = require('react-number-format');

    // Pagination
    const [postsPerPage] = useState (5);
    const [offset, setOffset] = useState (1);
    const [posts, setAllPosts] = useState ([]);
    const [pageCount, setPageCount] = useState (0)

    // Call api
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
        .get('https://y6896.sse.codesandbox.io/product_mobile/')
        .then(res => { setProducts(res.data); })
        
        .catch((err) => { console.log(err); });
    };

    return (
        <div className="product mt-3 ml-0 mr-0 p-3 bg-white text-center">
            <h5 className="text-left">
                <i className="fas fa-mobile-alt mr-1 text-danger mr-3" />
                <span className="text-danger ">ĐIỆN THOẠI NỔI BẬT</span>
            </h5>

            <div className="product__detail row mt-5">

                {products.map( (mobile,key) => {
                    return (
                    <React.Fragment key={mobile.id} mobileId={mobile.id}>
                        <div className="product--item col-md-3 col-6 mb-4">
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
                            <strike className="small" style={{color: '#8a8a8a'}}>
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

                <Pagination />
                
                {/* <div className="row col-md-12 justify-content-center">
                    <button className="btn btn-primary btn-sm" disabled>
                    <span className="spinner-border spinner-border-sm mr-2" />
                    Đang tải thêm sản phẩm . . .
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Mobile;