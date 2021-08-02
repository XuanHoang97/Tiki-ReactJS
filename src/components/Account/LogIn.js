import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Verify from './Verify';

function LogIn(props) {
    const [verify, setVerify] = useState(true)
    const [number, setNumber] = useState(0)

    return (
        <>
            <Modal className="login_resg" show={props.show} size="lg" centered>
                <button className="close text-end" onClick={props.hidden} style={{ textAlign: 'end', position: 'absolute', right: '-15px', zIndex: 10, opacity: "1", background: 'white', top: '-15px', border: '0', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', transform: 'scale(1.3)' }}>×</button>

                <Modal.Body className="info p-0">
                    <div className="row m-0 p-0">
                        <div className="col-md-8 p-4">
                            {verify ? (<>
                                <h4>Xin chào,</h4>
                                <div className="form-group">
                                    <label>Đăng nhập hoặc tạo tài khoản</label>
                                    <input type="text" className="form-control" aria-describedby="helpId"
                                        style={{ border: 'none', borderRadius: '0', borderBottom: '1px solid #ccc' }}
                                        placeholder="Số điện thoại hoặc email..."
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                    <button type="button"
                                        className="btn btn-danger mt-3 btn-smd btn-block"
                                        onClick={() => setVerify(false)}
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
                            </>) : <Verify phone={number} verify={() => setVerify(true)} />}
                        </div>
                        <div className="col-md-4 text-center"
                            style={{
                                background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="tiki" />
                            <div style={{ color: 'rgb(11, 116, 229)' }}>
                                <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                                <p className="small">Siêu ưu đãi mỗi ngày</p>
                            </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LogIn;