import React, { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthContext';
import FormLogin from './FormLogin';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getName, showModalAccount } from 'redux/actions/account';

const AlertLogin = styled.div`
    display: flex;
    position: fixed;
    background: rgba(133, 142, 159, 0.2);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    z-index: 111111 !important;
    .alerts{
        width: 300px;
        height: 150px;
        background: #fff;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        border-radius: 10px;
        .check{
            color: green;
        }
        p{
            margin: 0;
        }
    }
`;

function Account() {
    const { setShowModal, setLogin, setAccount, setNumber, alert, setAlert } = useContext(AuthContext)
    const username = useSelector(state => state.account.username)
    const dispatch = useDispatch()
    const logOut = () => {
        setAccount({
            name: '',
            password: ''
        })
        setLogin('login')
        dispatch(getName())
        setNumber()
        setAlert(true)
    }
    useEffect(() => {
        const setAlerts = setTimeout(() => {
            setAlert(false)
        }, 1500)
        return () => {
            clearTimeout(setAlerts)
        }
    }, [alert, setAlert])

    const login = () => {
        dispatch(showModalAccount())
        setLogin('login')
    }

    return (
        <>
            {alert ? <AlertLogin>
                <div className="alerts">
                    <i className="fas fa-check-circle check"></i>
                    <p>{username ? 'Đăng nhập thành công' : 'Đã đăng xuất'}</p>
                </div>
            </AlertLogin> : ''
            }
            < li className="account nav-item dropdown ml-3 mr-2 active form-login" style={{ fontSize: '14px' }}>
                <div className="nav-link dropdown-toggle" id="dropdownId" style={{ cursor: "pointer" }}>
                    <i className="fas fa-user-circle mr-2" style={{ fontSize: '18px' }} />
                    <span style={{ fontSize: '14px' }}>{username ? username : 'Tài khoản'}</span>
                </div>
                {username ?
                    (<div className="dropdown-menu control">
                        <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => logOut()}>
                            Đăng xuất
                        </button>
                    </div>) :
                    (
                        <>
                            <div className="dropdown-menu control">
                                <a href='/#' className="dropdown-item reg__log">
                                    <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => login()}>
                                        Đăng nhập
                                    </button>
                                </a>
                                <a href='/#' className="dropdown-item reg__log">
                                    <button type="button" className="btn btn-warning btn-sm btn-block" onClick={() => setShowModal(true)}>
                                        Tạo tài khoản
                                    </button>
                                </a>
                                <a className="dropdown-item reg__log" href="/#">
                                    <button type="button" className="btn btn-primary btn-sm btn-block">
                                        <i className="fab fa-facebook-f mr-4" /> <span>Đăng nhập bằng Facebook</span>
                                    </button>
                                </a>
                                <a className="dropdown-item reg__log" href="/#">
                                    <button type="button" className="btn btn-danger btn-sm btn-block">
                                        <i className="fab fa-google-plus-g mr-3" /> <span>Đăng nhập bằng Google</span>
                                    </button>
                                </a>
                                <a className="dropdown-item reg__log" href="/#">
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