import { numberFormat } from 'contants/NumberFormat';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteItemCart } from 'redux/actions/cart';
import { productsCartMenuState$ } from 'redux/selectors';
function Cart1() {
    const [count, setCount] = useState(0)
    const productsCart = useSelector(productsCartMenuState$)
    const dispatch = useDispatch()
    const handleCountDown = (e) => {
        setCount(e)
    }
    const handleCountUp = (e) => {
        setCount(e)
    }


    console.log(productsCart)
    const totalMoney = () => {
        let total = 0
        for (let item of productsCart) {
            total += item.price * item.count
        }
        return total
    }

    const deleteCart = (id) => {
        dispatch(deleteItemCart(id))
    }
    const renderCart = () => {
        return productsCart.map((item, index) => {
            return (
                <div className="bg-white p-3 row" key={index}>
                    <img className="col-md-2 w-100" src={item.img} alt="" />
                    <div className="col-md-5 small">
                        <h6>{item.name}</h6>
                        <p>- Tác giả: <a>{item.origin}</a> <br />
                            <span className="text-warning">{item.chip} </span> <br />
                        </p>
                        <a className="mr-4 text-danger" style={{
                            cursor: 'pointer'
                        }} onClick={() => deleteCart(item.id)}>Xóa</a>
                        <a className="text-primary">Để dành mua sau</a>
                    </div>

                    <div className="input-group col-md-2 col-6" style={{ height: '31px' }}>
                        <div className="input-group-prepend"
                            onClick={(e) => (item.count > 1 && --item.count, handleCountDown(item.count))}>
                            <button className="btn btn-light btn-sm"><i className="fas fa-minus small" /></button>
                        </div>
                        <input type="text" className="form-control text-center" readOnly value={item.count} style={{ height: '31px' }} />
                        <div className="input-group-append"
                            onClick={(e) => (++item.count, handleCountUp(item.count))}>
                            <button className="btn btn-light btn-sm" type="submit"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className="price col-md-3 text-right">
                        <h6 className="text-danger">
                            {numberFormat(item.price)}
                        </h6>
                        <strike className="small mr-2">
                            {numberFormat(item.price_old)}
                        </strike>
                        <span className="text-danger small">-{item.sale_off}%</span>
                    </div>
                </div>

            )
        })
    }
    return (
        <div className="main bg-light pt-3 pb-3">
            <div className="container">
                {/* Header  */}
                <div className="mb-2 m-1 d-flex">
                    <h6 className="mr-2">GIỎ HÀNG</h6>
                    <small> ({productsCart.length ? productsCart.length : 0} sản phẩm)</small>
                </div>
                <div className="row m-1 justify-content-between">
                    <div className="col-md-9 pl-0 ">
                        {renderCart()}
                    </div>
                    <div className="col-md-3 pr-0">
                        <div className="bg-white p-3">
                            <div className="row pb-0 justify-content-around">
                                <span>Tiki khuyến mãi</span>
                                <small className="text-secondary">Có thể chọn 2
                                    <i className="fas fa-info-circle" />
                                </small>
                            </div>
                            <div className="text-primary">
                                <i className="fas fa-money-check-alt mr-3" />
                                <a className="small">Chọn hoặc nhập mã khuyến mãi</a>
                            </div>
                        </div>
                        <div className="bg-white mt-3 p-2">
                            <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                <span>Tạm tính</span>
                                <small className="text-secondary">
                                    {numberFormat(totalMoney())}
                                </small>
                            </div>
                            <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                <span>Giảm giá</span>
                                <small className="text-secondary">0 <u>đ</u>
                                </small>
                            </div>
                            <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                <span>Tổng cộng</span>
                                <h6 className="text-secondary">
                                    {numberFormat(totalMoney())}
                                </h6>
                                <small className="col-md-12 p-0 text-right">(Đã bao gồm VAT nếu có)</small>
                            </div>
                        </div>

                        <Link to="/thanh-toan">
                            <button type="button" className="btn btn-danger btn-md btn-block mt-3 mb-3">Tiến hành đặt hàng</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart1;