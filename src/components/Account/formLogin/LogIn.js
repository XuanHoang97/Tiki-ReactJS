import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthContext';

const InputPhone = styled.input.attrs(props => ({
    placeholder: "Số điện thoại",
    type: "text",
    borderBottom: props.borderBottom,
}))`
    border: none;
    border-bottom: ${props => props.borderBottom ? '1px solid #ccc' : '1px solid rgb(255, 66, 78)'};
    font-size: 24px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 24px;
    }
`;

function LogIn() {
    const { setLogin, number, setNumber } = useContext(AuthContext)
    const [validate, setValidate] = useState(true)
    const [disable, setDisable] = useState(true)
    useEffect(() => {
        if (number) {
            if (number === '') {
                setValidate(false)
                setDisable(true)
            } else if (number.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
                setValidate(true)
                setDisable(false)

            } else {
                setValidate(false)
                setDisable(true)
            }
        } else {
            setValidate(true)
            setDisable(true)

        }
        return () => {
        }
    })
    const submitNumber = () => {
        setLogin('verify')
        setDisable(true)
    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            if ((disable === false && validate === true)) {
                submitNumber()
            } else {
                return;
            }
        } else {
            return;
        }
    }
    return (
        <>
            <h4>Xin chào,</h4>
            <div className="form-group">
                <label>Đăng nhập hoặc Tạo tài khoản</label>
                <InputPhone className='mt-4'
                    borderBottom={validate}
                    onChange={(e) => setNumber(e.target.value)}
                    onKeyDown={handleKeyEnter}
                />
                < p
                    style={{
                        display: (validate ? 'none' : 'block'),
                        color: 'rgb(255, 66, 78)', fontSize: '14px'
                    }}
                    className='mb-4 mt-2'
                > Số điện thoại không đúng định dạng.</p >
                <button type="button" disabled={disable}
                    style={{ fontSize: '20px', border: '0', background: 'rgb(255, 66, 78)' }}
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    onClick={() => (disable === false && validate === true) ? submitNumber() : ''}
                >Tiếp tục</button>
                <div className="text-center small mt-2 mb-5"><a className="text-center">Đăng nhập bằng email</a></div>
                <div className="text-center mb-3 small">Hoặc Tiếp tục bằng</div>

                <div className="row justify-content-center">
                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" /></a>
                    </div>

                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="gg" /></a>
                    </div>
                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="zalo" /></a>
                    </div>
                    <div className="small mt-2 m-3">Bằng việc tiếp tục, bạn đã chấp nhận <a className="text-primary">điều khoản sử dụng</a> </div>
                </div>
            </div>
        </>
    );
}

export default LogIn;