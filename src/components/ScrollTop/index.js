import React, { useEffect, useState } from 'react';

function ScrollTop() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const scrollToTop = () => {
        return window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    return (
        (scroll ? (<div style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: '1 !important'
        }}
        >
            <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#017fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                cursor: 'pointer'
            }}
                onClick={() => scrollToTop()}
            >

                <i className="fa fa-angle-right"
                    style={{
                        transform: 'rotate(-90deg) scale(1.5)',
                        color: '#fff'
                    }}
                ></i>

            </div>

        </div>) : '')
    );
}

export default ScrollTop;