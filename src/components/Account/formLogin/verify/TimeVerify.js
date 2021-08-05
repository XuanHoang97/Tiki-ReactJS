import React, { useEffect, useState } from 'react';

function TimeVerify() {
    const [count, setCount] = useState(15)

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
                    onClick={() => setCount(count => count + 30)}
                > Gửi lại mã</span>
            </div>
            <div className="small mt-2 mb-2" style={{ display: (count > 0 ? 'block' : 'none') }}>
                Mã xác minh có hiệu lực trong 15 phút
            </div>
        </>
    );
}

export default TimeVerify;