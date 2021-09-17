import { numberFormat, totalMoney } from 'contants/NumberFormat';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModalAccount } from 'redux/actions/account';
import { productsCartMenuState$ } from 'redux/selectors';
import { usernameState$ } from 'redux/selectors/account';
import ProductCart from './ProductCart';

function CartHeader(props) {
    const productsCart = useSelector(productsCartMenuState$)
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()
    const username = useSelector(usernameState$)

    const renderCart = () => {
        return productsCart.map(item => {
            return <ProductCart key={item._id} id={item._id} name={item.name}
                img={item.img} price={item.price} count={item.count} />
        })
    }
    const handleLogin = () => {
        username ? setToggle(!toggle) : dispatch(showModalAccount())
    }
    return (
        <li className="cart nav-item dropdown active" onClick={handleLogin} >
            <div className="nav-link dropdown-toggle" id="dropdownId" aria-haspopup="true">
                <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '18px' }}>
                    <span className="badge badge-pill badge-warning position-absolute " style={{ top: '-5px', left: '1.4rem' }}>
                        {productsCart.length}
                    </span>
                </i>
                <span>Giỏ Hàng</span>
            </div>

            <div className="dropdown-menu cart__info p-3 text-center" style={{ display: (toggle ? 'block' : 'none') }} aria-labelledby="dropdownId">
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

export default CartHeader;
