import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function Order(props) {
    // Option number product
    const [count, setCount] = useState(1);  

    return (
        <div>
            <div className="text-danger">
                <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
            </div>

            <div className="option">
                <Tabs>
                    <TabPanel><small>Chọn màu:</small> <strong className="text-primary">Trắng</strong> </TabPanel>
                    <TabPanel><small>Chọn màu:</small> <strong className="" style={{ color: 'orange' }}>Vàng</strong> </TabPanel>
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
                        <button className="btn btn-success btn-sm" disabled={count <2 ? true: ""}><i className="fas fa-minus small" /></button>
                    </div>
                    <input type="text" min="1" defaultValue={count} onClick={() => setCount(1)} className="form-control text-center" style={{ height: '31px' }} />
                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm"><i className="fas fa-plus small" /></button>
                    </div>
                </div>


                <Link to="/gio-hang-1">
                    <button type="button" className="btn btn-success btn-md btn-block mt-5">Thêm vào giỏ hàng</button>
                </Link>
                <div className="row mt-2 m-0">
                    <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                        <h6 className="m-0">TRẢ GÓP 0%</h6>
                        <small>Duyệt nhanh qua điện thoại</small>
                    </button>
                    <button type="button" className="col-md-6 btn btn-outline-primary btn-sm">
                        <h6 className="m-0">TRẢ GÓP QUA THẺ</h6>
                        <small>Visa, Master Card, VCB</small>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Order;