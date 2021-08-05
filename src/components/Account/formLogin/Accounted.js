import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthContext';

const InputPhone = styled.input.attrs(props => ({
    placeholder: "Mật khẩu",
    type: "password",
    borderBottom: props.borderBottom,
}))`
    border: none;
    border-bottom: ${props => props.borderBottom ? '1px solid #ccc' : '1px solid rgb(255, 66, 78)'};
    font-size: 15px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 15px;
    }
`;

function Accounted() {
    const { setLogin, number, setNumber, account: { name, password }, setShowModal, setNameAccount, setAlert, setKeyRandom } = useContext(AuthContext)
    const [passLogin, setPassLogin] = useState()
    const [comparePass, setComparePass] = useState(true)
    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            if (passLogin === password) {
                setComparePass(true)
                setShowModal(false)
                setNameAccount(name)
                setAlert(true)
                setKeyRandom(Math.ceil(Math.random() * 1000000).toFixed(0))
            } else {
                setComparePass(false)
            }
        } else {
            return;
        }
    }

    const handleLogin = () => {
        if (passLogin === password) {
            setComparePass(true)
            setShowModal(false)
            setNameAccount(name)
            setAlert(true)
        } else {
            setComparePass(false)
        }
    }
    return (
        <>
            <i className="fa fa-angle-left mb-4"
                style={{
                    fontSize: "50px",
                    color: '#ccc',
                    cursor: 'pointer'
                }}
                onClick={() => (setLogin('addAccount'), setNumber())}
            ></i>
            <h3 className="mt-8">Nhập mã xác minh</h3>
            <div className="form-group">
                <label>Vui lòng nhập mật khẩu Tiki của số điện thoại <span style={{ fontWeight: 'bold' }}>{number}</span></label>
                <InputPhone className='mt-4'
                    borderBottom={{}}
                    onChange={(e) => setPassLogin(e.target.value)}
                    onKeyDown={handleKeyEnter}
                />
                <span className='mt-2'
                    style={{ color: 'rgb(255, 66, 78)', fontSize: '13px', display: (comparePass ? 'none' : 'block') }}
                >Mật khẩu không đúng</span>
                <button type="button"
                    className="btn btn-danger mt-5 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}
                    onClick={handleLogin}
                >Đăng nhập</button>
                <div className='mt-2' style={{ fontSize: '13px', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}>Quên mật khẩu</span>
                    <span style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}>Đăng nhập bằng SMS</span>
                </div>
            </div>
        </>
    );
}

export default Accounted;