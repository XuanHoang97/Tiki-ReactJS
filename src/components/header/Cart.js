import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <li className="cart nav-item dropdown active" style={{ fontSize: '14px' }}>
                <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-shopping-cart mr-2" style={{fontSize:'18px'}}>
                        <span className="badge badge-pill badge-warning position-absolute" style={{ top: '-5px', left: '1.4rem' }}>0</span>
                    </i>
                    <span style={{fontSize:'13px'}}>Giỏ Hàng</span> 
                </a>
                <div className="dropdown-menu cart p-3 text-center" aria-labelledby="dropdownId" style={{width: '24rem', left: '-14.5rem' }}>
                    <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" />
                    <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                </div>
            </li>
        );
    }
}

export default Cart;
