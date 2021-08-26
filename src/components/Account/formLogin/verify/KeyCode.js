import { AuthContext } from 'components/Account/Context/AuthContext';
import React, { useContext, useEffect, useRef } from 'react';
import './keyCode.scss'

function KeyCode() {
    const codes = useRef(null);
    let { keycode, setKeycode, setKeyInput, keyNumber, keyBackspace } = useContext(AuthContext)

    useEffect(() => {
        const codeVerify = codes.current.querySelectorAll('.code')

        setKeyInput((Object.values(keycode).join('')))
        // 0 for null values
        // 8 for backspace 
        // 48-57 for 0-9 numbers
        codeVerify[0].focus();

        codeVerify.forEach((code, idx) => {
            code.addEventListener('keydown', (e) => {
                if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
                    e.preventDefault();
                } else if (e.key >= 0 && e.key <= 9) {
                    codeVerify[idx].value = ''
                    keyNumber = setTimeout(() => {
                        if (idx < 5) {
                            codeVerify[idx + 1].focus()
                        } else {
                            codeVerify[5].focus();
                        }
                    }, 10)
                } else if (e.key === 'Backspace') {
                    if (idx >= 1) {
                        keyBackspace = setTimeout(() => codeVerify[idx - 1].focus(), 10)
                    }
                }

            })
        })

        return () => {
        }
    }, [keyNumber, keyBackspace, keycode])

    return (
        <>

            <div ref={codes} className="code-container">
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, one: e.target.value })} className="code" placeholder="0" maxLength="1" />
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, two: e.target.value })} className="code" placeholder="0" maxLength="1" />
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, three: e.target.value })} className="code" placeholder="0" maxLength="1" />
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, four: e.target.value })} className="code" placeholder="0" maxLength="1" />
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, five: e.target.value })} className="code" placeholder="0" maxLength="1" />
                <input type="tel" onChange={(e) => setKeycode({ ...keycode, six: e.target.value })} className="code" placeholder="0" maxLength="1" />
            </div>
        </>
    );
}

export default KeyCode;