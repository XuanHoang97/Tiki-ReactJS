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
        (scroll ? (<div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '10 !important' }} >
            <div style={{ width: '50px', height: '50px', backgroundColor: '#017fff', display: 'flex', justifyContent: 'center', alignItems: 'center',borderRadius: '50%',zIndex: 10,cursor: 'pointer'
            }}
                onClick={() => scrollToTop()}
            >

                <i class="fas fa-arrow-circle-up" style={{ fontSize:'25px', color: '#fff' }}> </i>
            </div>

        </div>) : '')
    );
}

export default ScrollTop;