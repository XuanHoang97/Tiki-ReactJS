import React from 'react';
import KeyCode from './KeyCode/KeyCode';
import TimeVerify from './TimeVerify';

function Verify(props) {

    return (
        <>
            <i className="fa fa-angle-left mb-4"
                style={{
                    fontSize: "50px",
                    color: '#ccc',
                    cursor: 'pointer'
                }}
                onClick={props.verify}
            ></i>
            <h3 className="mt-8">Nhập mã xác minh</h3>
            <div className="form-group">
                <label>Để xác minh số điện thoại là của bạn, nhập mã gồm 6 chữ số vừa được gửi đến <span style={{ fontWeight: 'bold' }}>{props.phone}</span></label>
                <KeyCode />
                <button type="button"
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}

                >Xác minh</button>
            </div>
            <TimeVerify />
        </>
    );
}

export default Verify;