import styled from 'styled-components';

export const InputPassword = styled.input.attrs(props => ({
    type: 'password',
    borderBottom: props.borderBottom
}))`
    border: none;
    border-bottom: ${props => props.borderBottom ? '1px solid rgb(255, 66, 78)' : '1px solid #ccc'};
    font-size: 15px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 15px;
    }
`;

export const ErrorPassword = styled.p`
    color: rgb(255, 66, 78); 
    font-size: 13px
`