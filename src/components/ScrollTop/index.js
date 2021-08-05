import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const ScrollContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 1000000 !important;
`;
const InScroll = styled.div`
    width: 40px; 
    height: 40px; 
    background-color: rgb(1, 127, 255); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    border-radius: 50%; 
    cursor: pointer;
    .control{
        font-size: 25px;
        color: #fff;
    }
`;
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
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    return (
        (scroll ? (
            <ScrollContainer onClick={() => scrollToTop()}>
                <InScroll>
                    <i className="fas fa-arrow-alt-circle-up control"></i>
                </InScroll>
            </ScrollContainer >) : '')
    );
}

export default ScrollTop;