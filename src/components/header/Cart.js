import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemCart } from 'redux/actions/cart';
import { productsCartMenuState$ } from 'redux/selectors';
import { numberFormat, totalMoney } from '../../contants/NumberFormat';

function Cart(props) {
    const productsCart = useSelector(productsCartMenuState$)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteItemCart(id))
    }
    const renderCart = () => {
        return productsCart.map(item => {
            return (<div key={item.id}>
                <div className='d-flex justify-content-between align-items-start'>
                    <div className="col-md-2 text-center border" style={{ padding: '2px 3px' }}>
                        <img className="w-75 h-75" src={item.img} alt={item.name} />
                    </div>
                    <div className="col-md-5 p-0" style={{ lineHeight: 0 }}>
                        <small style={{ lineHeight: '15px' }}>{item.name}</small>
                        <p className='text-muted small mt-1 mb-0' style={{ lineHeight: '15px' }}>Trả góp 0% - Tặng phụ kiện - Voucher 5% </p>
                    </div>
                    <div className="col-md-4 p-0" style={{ display: 'grid', gap: '10px', textAlign: 'end' }}>
                        <div className="p-0 d-flex justify-content-end align-items-start" style={{ gap: 2, alignSelf: 'start' }}>
                            <h6 className='small text-danger m-0' style={{ lineHeight: '15px', fontWeight: '700' }}>{numberFormat(item.price)}</h6>
                            <span className='small m-0' style={{ lineHeight: '15px' }}> x{item.count}</span>
                        </div>
                        <div onClick={() => handleDelete(item.id)} style={{ cursor: 'pointer' }}>Xóa</div>
                    </div>
                </div>
                <hr />
            </div>)
        })
    }
    return (

        <li className="cart nav-item dropdown active" style={{ fontSize: '14px' }}>
            <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '18px' }}>
                    <span className="badge badge-pill badge-warning position-absolute" style={{ top: '-5px', left: '1.4rem' }}>{productsCart.length}</span>
                </i>
                <span style={{ fontSize: '13px' }}>Giỏ Hàng</span>
            </a>

            <div className="dropdown-menu cart p-3 text-center" aria-labelledby="dropdownId" style={{ width: '24rem', left: '-14.5rem' }}>
                {
                    productsCart.length > 0 ?
                        (<div className='text-left'>
                            <h6 className='text-muted'>Sản phẩm đã thêm</h6>
                            <hr />
                            {renderCart()}
                            <h6 className='text-muted'>Tổng cộng: <span className='ml-3 font-weight-bold text-danger'>
                                {numberFormat(totalMoney(productsCart))}
                            </span>
                            </h6>
                            <Link to='/gio-hang'>
                                <button className='btn btn-success w-100 mt-2 font-weight-bold'>Xem giỏ hàng</button>
                            </Link>
                        </div>)
                        :
                        (
                            <>
                                <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" />
                                <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                            </>
                        )
                }

            </div>

        </li>
    );
}

export default Cart;
