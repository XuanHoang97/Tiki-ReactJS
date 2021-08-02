import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import './keyCode.scss'
function KeyCode() {

    const codes = useRef(null);

    useEffect(() => {
        const codeVerify = codes.current.querySelectorAll('.code')

        // 0 for null values
        // 8 for backspace 
        // 48-57 for 0-9 numbers
        codeVerify.forEach((code, idx) => {
            console.log(code)
            code.addEventListener('keydown', (e) => {
                console.log(idx)
                if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
                    e.preventDefault();
                } else if (e.key >= 0 && e.key <= 9) {
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
        return () => {
            console.log(123)
        }
    }, [])



    return (
        <div ref={codes} className="code-container">
            <input type="tel" className="code" placeholder="0" maxLength="1" />
            <input type="tel" className="code" placeholder="0" maxLength="1" />
            <input type="tel" className="code" placeholder="0" maxLength="1" />
            <input type="tel" className="code" placeholder="0" maxLength="1" />
            <input type="tel" className="code" placeholder="0" maxLength="1" />
            <input type="tel" className="code" placeholder="0" maxLength="1" />
        </div>
    );
}

export default KeyCode;