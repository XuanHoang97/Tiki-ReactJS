import { numberFormat } from 'contants/NumberFormat';
import React from 'react';

function DeliverPayments(props) {
    const { productsCart } = props
    const renderProduct = () => {
        return productsCart.map(item => {
            return (
                <div style={{ display: 'flex' }} key={item.id}>
                    <div className="col-md-3 p-0">
                        <img className="w-75" src={item.img} alt="" />
                    </div>
                    
                    <div className="col-md-5 p-0">
                        <small>{item.name}</small>
                        <p>Số lượng: X{item.count} </p>
                    </div>

                    <div className="col-md-4 p-0 text-right">
                        <span>{numberFormat(item.price)}</span>
                    </div>
                </div>
            )
        })
    }

    const handleChange = () => {

    }

    return (
        <div>
            <h6 className="text-dark">1. Chọn hình thức giao hàng</h6>
            <div className="option_delivery row">
                <div className="standard col-md-6 ">
                    <div className="custom-control custom-radio bg-light p-4 text-center">
                        <input type="radio" className="custom-control-input" id="customRadio" name="gh" value="gh" defaultChecked onChange={(e) => handleChange()} />
                        <label className="custom-control-label" htmlFor="customRadio">Giao hàng tiêu chuẩn</label>
                    </div>
                </div>

                <div className="fast col-md-6">
                    <div className="custom-control custom-radio bg-light p-4 text-center">
                        <input type="radio" className="custom-control-input" id="customRadio1" name="gh" value="gh" readOnly />
                        <label className="custom-control-label" htmlFor="customRadio1">Giao hàng nhanh</label>
                    </div>
                </div>
            </div>

            <div className="info_prod border border-light mt-3 p-3 m-0 row justify-content-between">
                <div className="col-md-6 p-0 row">
                    {renderProduct()}
                </div>

                <div className="col-md-6 p-0 row">
                    <div className="col-md-8 ">
                        <span className="text-success">Giao vào thứ 7, 26/06/2021</span>
                        <p>Được giao bởi TikiPost</p>
                        <span className="text-danger">Giao tiêu chuẩn</span>
                    </div>

                    <div className="col-md-4 p-0 text-right">
                        <span>Miễn phí</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliverPayments;