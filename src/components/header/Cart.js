import React from 'react';
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
            return (<div key={item.id} className="info">
                <div className='d-flex justify-content-between align-items-start'>
                    <div className="col-md-2 p-0">
                        <img className="w-100 rounded" src={item.img} alt={item.name} />
                    </div>

                    <div className="col-md-6 mt-1 pl-2 p-0 content">
                        <small>{item.name}</small>
                        <div className='text-muted small mt-3'>Trả góp 0% - Tặng phụ kiện - Voucher 5% </div>
                    </div>

                    <div className="col-md-4 p-0 price">
                        <div className="p-0 price__num">
                            <h6 className='small text-danger m-0'>{numberFormat(item.price)}</h6>
                            <span className='small m-0'> x{item.count}</span>
                        </div>
                        <div onClick={() => handleDelete(item.id)} className="btnDelProd text-danger small mt-2">Xóa</div>
                    </div>
                </div>
                <hr />
            </div>)
        })
    }

    return (
        <li className="cart nav-item dropdown active">
            <Link to="/gio-hang" className="nav-link dropdown-toggle"  id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '18px' }}>
                    <span className="badge badge-pill badge-warning position-absolute " style={{ top: '-5px', left: '1.4rem' }}>
                        {productsCart.length}
                    </span>
                </i>
                <span>Giỏ Hàng</span>
            </Link>

            <div className="dropdown-menu cart__info p-3 text-center" aria-labelledby="dropdownId">
                {
                    productsCart.length > 0 ?
                    (<div className='text-left'>
                        <h6 className='text-muted'>Sản phẩm đã thêm</h6>
                        <hr />
                        {renderCart()}

                        <h6>Tổng cộng: 
                            <span className='ml-3 font-weight-bold text-danger'>
                                {numberFormat(totalMoney(productsCart))}
                            </span>
                        </h6>
                        
                        <Link to='/gio-hang'>
                            <button className='btn btn-success btn-sm w-100 mt-2 font-weight-bold'>Xem giỏ hàng</button>
                        </Link>
                    </div>)
                    :
                    (
                        <div>
                            <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                        </div>
                    )
                }

            </div>
        </li>
    );
}

export default Cart;
