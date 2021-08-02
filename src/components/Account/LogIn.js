import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Verify from './Verify';
import styled from 'styled-components';

const InputPhone = styled.input.attrs(props => ({
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
`
const RightImg = styled.div`
    background: linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
function LogIn(props) {

    const [verify, setVerify] = useState(true)
    const [number, setNumber] = useState()
    const [validate, setValidate] = useState(true)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        if (number) {
            if (number === '') {
                setValidate(false)
                setDisable(true)
            } else if (number.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
                setValidate(true)
                setDisable(false)

            } else {
                setValidate(false)
                setDisable(true)
            }
        } else {
            setValidate(true)
            setDisable(true)

        }
        return () => {
        }
    })

    const submitNumber = () => {
        setVerify(false)
        setDisable(true)
    }
    const verifyFormat = () => {
        setVerify(true);
        setNumber();
    }
    const hiddenForm = () => {
        props.hidden()
        setVerify(true);
        setNumber();
        return;
    }
    return (
        <>
            <Modal className="login_resg" show={props.show} size="lg" centered>
                <button className="close text-end" onClick={() => hiddenForm()} style={{ textAlign: 'end', position: 'absolute', right: '-15px', zIndex: 10, opacity: "1", background: 'white', top: '-15px', border: '0', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', transform: 'scale(1.3)', outline: 'none' }}>×</button>

                <Modal.Body className="info p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-8 p-4">
                            {verify ? (<>
                                <h4>Xin chào,</h4>
                                <div className="form-group">
                                    <label>Đăng nhập hoặc Tạo tài khoản</label>
                                    <InputPhone className='mt-4'
                                        borderBottom={validate}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                    < p
                                        style={{
                                            display: (validate ? 'none' : 'block'),
                                            color: 'rgb(255, 66, 78)', fontSize: '14px'
                                        }}
                                        className='mb-4 mt-2'
                                    > Số điện thoại không đúng định dạng.</p >
                                    <button type="button" disabled={disable}
                                        style={{ fontSize: '20px', border: '0', background: 'rgb(255, 66, 78)' }}
                                        className="btn btn-danger mt-3 btn-smd btn-block"
                                        onClick={() => (disable === false && validate === true) ? submitNumber() : setVerify(true)}
                                    >Tiếp tục</button>
                                    <div className="text-center small mt-2 mb-5"><a className="text-center">Đăng nhập bằng email</a></div>
                                    <div className="text-center mb-3 small">Hoặc Tiếp tục bằng</div>

                                    <div className="row justify-content-center">
                                        <div className="col-md-2 col-3">
                                            <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" /></a>
                                        </div>

                                        <div className="col-md-2 col-3">
                                            <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="gg" /></a>
                                        </div>
                                        <div className="col-md-2 col-3">
                                            <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="zalo" /></a>
                                        </div>
                                        <div className="small mt-2 m-3">Bằng việc tiếp tục, bạn đã chấp nhận <a className="text-primary">điều khoản sử dụng</a> </div>
                                    </div>
                                </div>
                            </>) : <Verify phone={number} verify={() => verifyFormat()} />}
                        </div>
                        <RightImg className="col-md-4 text-center">
                            <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="tiki" />
                            <div style={{ color: 'rgb(11, 116, 229)' }}>
                                <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                                <p className="small">Siêu ưu đãi mỗi ngày</p>
                            </div>
                        </RightImg>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LogIn;