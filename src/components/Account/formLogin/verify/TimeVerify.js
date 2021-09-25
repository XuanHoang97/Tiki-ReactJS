import { AuthContext } from 'components/Account/Context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';

function TimeVerify() {
    const [count, setCount] = useState(15)
    const { setKeyRandom } = useContext(AuthContext)
    useEffect(() => {
        var counts = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        if (count <= 0) {
            clearInterval(counts);
        }
        return () => {
            clearInterval(counts);
        }
    }, [count])

    const handleCallback = () => {
        setCount(count => count + 30);
        setKeyRandom(Math.ceil(Math.random() * 1000000).toFixed(0))
    }
    return (
        <>
            <div style={{ display: (count <= 0 ? 'none' : 'block') }}
                className="mt-4 small"
            >Gửi lại mã sau:
                <span style={{ color: 'rgb(13, 92, 182)' }}> {count}s</span>
            </div>

            <div className="small mt-4 mb-5" style={{ display: (count > 0 ? 'none' : 'block') }}>Không nhận được?
                <span style={{
                    color: 'rgb(13, 92, 182)', cursor: 'pointer',
                }}
                    onClick={() => handleCallback()}
                > Gửi lại mã</span>
            </div>
            <div className="small mt-2 mb-2" style={{ display: (count > 0 ? 'block' : 'none') }}>
                Mã xác minh có hiệu lực trong 15 phút
            </div>
        </>
    );
}

export default TimeVerify;