import { Modal } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import Verify from './formLogin/Verify';
import styled from 'styled-components';
import LogIn from './formLogin/LogIn';
import { AuthContext } from './Context/AuthContext';
import AddAccount from './formLogin/AddAccount';
import Accounted from './formLogin/Accounted';

const RightImg = styled.div`
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
function FormLogin() {
    const { login, setLogin, setAccount, showModal, setShowModal } = useContext(AuthContext)
    const hiddenForm = () => {
        setAccount({
            name: '',
            password: ''
        })
        setLogin('login')
        setShowModal(false)
        return;
    }

    return (
        <>
            <Modal className="login_resg" show={showModal} size="lg" centered>
                <button className="close text-end" onClick={() => hiddenForm()} style={{ textAlign: 'end', position: 'absolute', right: '-15px', zIndex: 10, opacity: "1", background: 'white', top: '-15px', border: '0', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', transform: 'scale(1.3)', outline: 'none' }}>×</button>

                <Modal.Body className="info p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-8 p-4">
                            {login === 'login' ? <LogIn /> : ''}
                            {login === 'verify' ? <Verify /> : ''}
                            {login === 'addAccount' ? <AddAccount /> : ''}
                            {login === 'accounted' ? <Accounted /> : ''}
                        </div>
                        <RightImg className="col-md-4 text-center">
                            <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="tiki" />
                            <div style={{ color: 'rgb(11, 116, 229)' }}>
                                <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                                <p className="small mb-0">Siêu ưu đãi mỗi ngày</p>
                            </div>
                        </RightImg>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormLogin;