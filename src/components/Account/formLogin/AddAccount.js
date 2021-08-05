import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthContext';

const InputPhone = styled.input`
    border: none;
    font-size: 16px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 16px;
    }
`
function AddAccount() {
    const { setLogin, account, setAccount } = useContext(AuthContext)
    const [hidden, setHidden] = useState(false)

    const [validateName, setValidateName] = useState()
    const [validatePass, setValidatePass] = useState()
    const [accept, setAccept] = useState(false)

    useEffect(() => {

        //Validate name
        if (account.name === '') {
            setValidateName(false)
            setAccept(false)
        } else if (account.name.match(/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g)) {
            setValidateName(false)
            setAccept(true)
        } else {
            setValidateName(true)
            setAccept(false)
        }

        // Validate password
        if (account.password === '') {
            setValidatePass(false)
            setAccept(false)
        } else if (account.password.match(/^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g)) {
            setValidatePass(false)
            setAccept(true)
        } else {
            setValidatePass(true)
            setAccept(false)
        }
    })

    const handleCLick = () => {
        if (validateName === false && validatePass === false && accept === true) {
            setLogin('accounted')
        } else {
            return;
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
                onClick={() => (setLogin('verify'))}
            ></i>
            <h3 className="mb-4">Tạo tài khoản</h3>
            <div className="form-group">
                <label className='mb-3'>Vui lòng cho biết tên bạn</label>
                <InputPhone className='mb-2'
                    style={{ borderBottom: (validateName ? '1px solid rgb(255, 66, 78)' : '1px solid #ccc') }}
                    type="text"
                    defaultValue={account.name ? account.name : ''}
                    placeholder="Tên bạn"
                    borderBottom={{}}
                    onChange={(e) => setAccount({ ...account, name: e.target.value })}
                />
                <span
                    style={{ color: 'rgb(255, 66, 78)', fontSize: '13px', display: (validateName ? 'block' : 'none') }}
                >Tên phải chứa ít nhất 2 chữ, không chứa chữ số</span>
                <label className='mb-3 mt-4'>Đặt mật khẩu</label>
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: (validatePass ? '1px solid rgb(255, 66, 78)' : '1px solid #ccc') }}>
                    <InputPhone className='border-0'
                        type={hidden ? "text" : 'password'}
                        defaultValue={account.password ? account.password : ''}
                        placeholder="Mật khẩu"
                        borderBottom={{}}
                        onChange={(e) => setAccount({ ...account, password: e.target.value })}
                    />
                    <small style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}
                        onClick={() => setHidden(!hidden)}
                    >{hidden ? 'Ẩn' : 'Hiện'}</small>
                </div>
                <span className='mt-2'
                    style={{ color: 'rgb(255, 66, 78)', fontSize: '13px', display: (validatePass ? 'block' : 'none') }}
                >Mật khẩu phải dài từ 8 đến 32 ký tự, bao gồm số và chữ</span>
                <button type="button"
                    disabled={validateName === false && validatePass === false && accept === true ? false : true}
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}
                    onClick={() => handleCLick()}
                >Tạo tài khoản</button>
            </div>
        </>
    );
}

export default AddAccount;