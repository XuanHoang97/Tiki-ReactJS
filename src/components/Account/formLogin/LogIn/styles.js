import styled from 'styled-components';

export const InputPhone = styled.input.attrs(props => ({
    placeholder: "Số điện thoại",
    type: "text",
    borderBottom: props.borderBottom,
}))`
    border: none;
    border-bottom: ${props => props.borderBottom ? '1px solid #ccc' : '1px solid rgb(255, 66, 78)'};
    font-size: 24px;
    width: 100%;
    outline: none;
    ::placeholder{
        font-size: 24px;
    }
`;
export const ErrorNumber = styled.p`
    color: rgb(255, 66, 78);
    font-size: 14px
`
export const ButtonSubmit = styled.button`
    font-size: 20px; 
    border: 0;
    background: rgb(255, 66, 78)
`