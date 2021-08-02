import React, { useEffect, useRef } from 'react';
import styled from 'styled-components'

function Verify(props) {
    const CodeContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
        gap: 20px;
        .code {
            font-size: 32px;
            border: none;
            border-bottom: 1px solid #eee;
            margin: 0;
            color: rgb(36, 36, 36);
            padding: 10px 0;
            width: 1em;
            outline:none;
            text-align: center;
            font-weight: bold;
            -moz-appearance: textfield;
          }
          
          .code::-webkit-outer-spin-button,
          .code::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          .code:focus {
            border-color: #3498db;
          }
          .code::placeholder{
              font-size: 32px;
          }
    `;

    const codes = useRef(null);

    useEffect(() => {
        const codeVerify = codes.current.querySelectorAll('.code')

        // 0 for null values
        // 8 for backspace 
        // 48-57 for 0-9 numbers
        codeVerify.forEach((code, idx) => {
            code.addEventListener('keydown', (e) => {
                if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
                    e.preventDefault();
                }
                else if (e.key >= 0 && e.key <= 9) {
                    codeVerify[idx].value = ''
                    setTimeout(() => {
                        if (idx < 5) {
                            codeVerify[idx + 1].focus()

                        } else {
                            return;
                        }
                    }, 10)
                } else if (e.key === 'Backspace') {
                    if (idx >= 1) {
                        setTimeout(() => codeVerify[idx - 1].focus(), 10)
                    } else {
                        return;
                    }
                }

            })
        })
    }, [])

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
                <CodeContainer ref={codes} className="code-container">
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                    <input type="number" className="code" placeholder="0" min="0" max="9" required />
                </CodeContainer>
                <button type="button"
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}

                >Xác minh</button>
                <div className="small mt-2 mb-5">Không nhận được? <a href="/">Gửi lại mã</a></div>

            </div>
        </>
    );
}

export default Verify;