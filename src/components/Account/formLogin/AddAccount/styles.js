import styled from 'styled-components';

export const InputAccount = styled.input.attrs(props => ({
    borderBottom: props.borderBottom,
}))`
    border: none;
    border-bottom: ${props => props.borderBottom ? '1px solid rgb(255, 66, 78)' : '1px solid #ccc'};
    font-size: 16px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 16px;
    }
`
export const ErrorAccount = styled.p`
    color: rgb(255, 66, 78); 
    font-size: 13px
`
export const FormPassword = styled.div.attrs(props => ({
    borderBottom: props.borderBottom,
}))`
    display: flex;
    border-bottom: ${props => props.borderBottom ? '1px solid rgb(255, 66, 78)' : '1px solid #ccc'};
    align-items: center
`