import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import KeyCode from './verify/KeyCode';
import TimeVerify from './verify/TimeVerify';

function Verify() {
    const { setLogin, number, setNumber, keyRandom, keyInput, setKeycode } = useContext(AuthContext)
    const [otp, setOtp] = useState(false)

    const handleVerify = () => {
        if (keyRandom === keyInput) {
            setOtp(false)
            setLogin('addAccount')
            setKeycode('')
        } else {
            setOtp(true)
            return;
        }
    }

    const handleBack = () => {
        setLogin('login')
        setNumber()
    }
    return (
        <>
            <i className="fa fa-angle-left mb-4"
                style={{
                    fontSize: "50px",
                    color: '#ccc',
                    cursor: 'pointer'
                }}
                onClick={() => handleBack()}
            ></i>
            <h3 className="mt-8">Nhập mã xác minh</h3>
            <div className="form-group">
                <label>Để xác minh số điện thoại là của bạn, nhập mã gồm 6 chữ số vừa được gửi đến <span style={{ fontWeight: 'bold' }}>{number}</span></label>
                <div>
                    <h5>Key code: {keyRandom}</h5>
                </div>
                <KeyCode />
                {
                    otp ? (<p className="mt-2 mb-4"
                        style={{ color: 'rgb(255, 66, 78', fontSize: '15px', textAlign: 'center' }}
                    >Mã xác thực không đúng hoặc đã hết hạn</p>) : ''
                }

                <button type="button"
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}
                    onClick={handleVerify}
                >Xác minh</button>
            </div>
            <TimeVerify />
        </>
    );
}

export default Verify;