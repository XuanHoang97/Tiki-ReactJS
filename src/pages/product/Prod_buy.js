import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Prod_buy(props) {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const Qty = props.qty;

    function handlePlus() {
        // (count<Qty) ? setCount(count+1) : setError("Mua it thoi, không lại hết tiền");
        if (count < Qty) { setCount(count + 1); setError(null);
        } else {
        setError("Mua ít thôi không lại hết tiền :)");
        }
    }

    function handleMinus() {
        // (count >0 ? setCount(count-1):setError("Vui lòng chọn lại"))
        if (count > 0) { setCount(count - 1); setError(null);
        } else {
        setError("Vui lòng chọn lại ");
        }
    }

    function handleValueChange(e) {
        const x = Number(e.target.value);

        if (isNaN(x) || x < 1 || x > Qty) { setError( "Giá trị không hợp lệ" ); /*How to display/include handle plus & minus Error messages*/
        } 
        else { setCount(x); setError("ok"); }
        console.log(x);
    }


    return (
        <div className="col-md-6 pl-4 pr-2 text-left">
            <h5>Samsung galaxy ZFold2</h5>
            <div className="rate row m-1 mt-3 mb-2 align-items-center">
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star text-secondary small" />
                <span className="fa fa-star text-secondary small" />
                <small className="ml-3">( Xem 46 đánh giá )</small>
            </div>
            <div className="price bg-light p-2">
                <div className="row m-1 align-items-center">
                <h4>49.000.000 <u>đ</u></h4>
                <span className="badge badge-pill badge-danger ml-3 mr-4">- 2%</span>
                <strike className="small">50.000.000 <u>đ</u> </strike>
                </div>
            </div>
            <div className="text-danger">
                <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
            </div>

            <div className="option">
                <Tabs>
                    <TabPanel><small>Chọn màu:</small> <strong className="text-primary">Trắng</strong> </TabPanel>
                    <TabPanel><small>Chọn màu:</small> <strong className="" style={{color:'orange'}}>Vàng</strong> </TabPanel>
                    <TabPanel><small>Chọn màu:</small> <strong className="text-secondary">Xám</strong> </TabPanel>

                    <TabList>
                        <Tab>Trắng</Tab>
                        <Tab>Vàng</Tab>
                        <Tab>Xám</Tab>
                    </TabList>
                </Tabs>
            
                <small>Số lượng:</small>
                <div className="input-group col-md-3 pt-2 col-6 p-0">
                    <div className="input-group-prepend">
                        <button className="btn btn-success btn-sm" onClick={handleMinus}><i className="fas fa-minus small" /></button>
                    </div>
                    <input type="text" min="0" value={count} onClick={() => setCount(0)}  onChange={handleValueChange} className="form-control text-center"  style={{height: '31px'}} />
                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm" onClick={handlePlus}><i className="fas fa-plus small" /></button>
                    </div>
                </div>
                {error}

                <Link to="/gio-hang-1">  
                    <button type="button" name id className="btn btn-success btn-md btn-block mt-5">Thêm vào giỏ hàng</button>
                </Link>
                <div className="row mt-2 m-0">
                <button type="button" name id className="col-md-6 btn btn-outline-primary btn-sm">
                    <h6 className="m-0">TRẢ GÓP 0%</h6>
                    <small>Duyệt nhanh qua điện thoại</small>
                </button>
                <button type="button" name id className="col-md-6 btn btn-outline-primary btn-sm">
                    <h6 className="m-0">TRẢ GÓP QUA THẺ</h6>
                    <small>Visa, Master Card, VCB</small>
                </button>
                </div>
            </div>
        </div>
    );
}

export default Prod_buy;