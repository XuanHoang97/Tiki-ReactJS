import React, { useContext, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import FormLogin from './FormLogin';

function Account() {
    const { setShowModal, nameAccount } = useContext(AuthContext)
    return (
        <>
            < li className="account nav-item dropdown ml-3 mr-2 active" style={{ fontSize: '14px' }}>
                <div className="nav-link dropdown-toggle" id="dropdownId" style={{ cursor: "pointer" }}>
                    <i className="fas fa-user-circle mr-2" style={{ fontSize: '18px' }} />
                    <span style={{ fontSize: '14px' }}>{nameAccount ? nameAccount : 'Tài khoản'}</span>
                </div>
                {nameAccount ? '' : (
                    <>
                        <div className="dropdown-menu control">
                            <a className="dropdown-item reg__log">
                                <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => (setShowModal(true))}>
                                    Đăng nhập
                                </button>
                            </a>
                            <a className="dropdown-item reg__log">
                                <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => setShowModal(true)}>
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
                        <FormLogin />
                    </>
                )}
            </li >

        </>
    );
}

export default Account;