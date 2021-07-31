import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import { Modal } from 'react-bootstrap'
import MenuTop from './Menu_top'
import Category from './Category';
import Search from './Search';
import Cart from './Cart';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            showHide: false
        }
    }

    Modal() { this.setState({ showHide: !this.state.showHide }) }

    render() {
        return (
            <div className="header" style={{ backgroundColor: 'rgb(1, 127, 255)' }}>
                <div className="container p-0">
                    <div className="row pr-2">
                        <nav className="navbar navbar-expand-sm navbar-dark col-12 pb-0 pt-1">
                            <Link to="/" className="navbar-brand pt-0 col-3 col-md-1">
                                <img style={{ maxWidth: '58px' }} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo" />
                            </Link>

                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-bars"></i>
                            </button>

                            <div className="collapse navbar-collapse col-md-11 p-0" id="collapsibleNavId">
                                <ul className="navbar-nav align-items-center col-md-12">
                                    <Category />

                                    <Search />

                                    <li className="account nav-item dropdown ml-3 mr-2 active" style={{ fontSize: '14px' }}>
                                        <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-user-circle mr-2" style={{ fontSize: '18px' }} />
                                            <span style={{ fontSize: '14px' }}>Tài khoản</span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <a className="dropdown-item reg__log">
                                                <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => this.Modal()}>
                                                    Đăng nhập
                                                </button>
                                            </a>


                                            <a className="dropdown-item reg__log">
                                                <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => this.Modal()}>
                                                    Tạo tài khoản
                                                </button>
                                            </a>
                                            <a className="dropdown-item reg__log" href="/">
                                                <button type="button" className="btn btn-primary btn-sm btn-block">
                                                    <i className="fab fa-facebook-f mr-4" /> <span>Đăng nhập bằng Facebook</span>
                                                </button>
                                            </a>
                                            <a className="dropdown-item reg__log" href="/">
                                                <button type="button" className="btn btn-danger btn-sm btn-block">
                                                    <i className="fab fa-google-plus-g mr-3" /> <span>Đăng nhập bằng Google</span>
                                                </button>
                                            </a>
                                            <a className="dropdown-item reg__log" href="/">
                                                <button type="button" className="btn btn-info btn-sm btn-block">
                                                    <i className="far fa-comment-dots mr-4" /> <span>Đăng nhập bằng Zalo</span>
                                                </button>
                                            </a>
                                        </div>
                                    </li>

                                    {/* modal register/login  */}
                                    <Modal className="login_resg" show={this.state.showHide} size="lg" centered>
                                        <button className="close text-end" closeButton onClick={() => this.Modal()} style={{ textAlign: 'end', position: 'absolute', right: '-15px', zIndex: 10, opacity: "1", background: 'white', top: '-15px', border: '1px solid', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center' }}>×</button>

                                        <Modal.Body className="info p-0">
                                            <div className="row m-0 p-0">
                                                <div className="col-md-8 p-4">
                                                    <h4>Xin chào,</h4>
                                                    <div className="form-group">
                                                        <label htmlFor>Đăng nhập hoặc tạo tài khoản</label>
                                                        <input type="text" className="form-control" name id aria-describedby="helpId" style={{ border: 'none', borderRadius: '0', borderBottom: '1px solid #ccc' }} placeholder="Số điện thoại hoặc email..." />
                                                        <button type="button" name id className="btn btn-danger mt-3 btn-smd btn-block">Tiếp tục</button>
                                                        <div className="text-center small mt-2 mb-5"><a href className="text-center">Đăng nhập bằng email</a></div>
                                                        <div className="text-center mb-3 small">Hoặc Tiếp tục bằng</div>

                                                        <div className="row justify-content-center">
                                                            <div className="col-md-2 col-3">
                                                                <a href><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" /></a>
                                                            </div>

                                                            <div className="col-md-2 col-3">
                                                                <a href><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="gg" /></a>
                                                            </div>
                                                            <div className="col-md-2 col-3">
                                                                <a href><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="zalo" /></a>
                                                            </div>
                                                            <div className="small mt-2 m-3">Bằng việc tiếp tục, bạn đã chấp nhận <a href class="text-primary">điều khoản sử dụng</a> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pt-5 text-center" style={{ background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)' }}>
                                                    <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="tiki" />
                                                    <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                                                    <p className="small">Siêu ưu đãi mỗi ngày</p>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>

                                    <Cart />
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <MenuTop />
                </div>
            </div>
        );
    }
}

export default Header;