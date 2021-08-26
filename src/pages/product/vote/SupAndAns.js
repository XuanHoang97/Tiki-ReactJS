import React from 'react';

function SupAndAns(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='chat col-12 position-relative'>
                    <textarea type="text" className='col-12' placeholder="Viết câu hỏi của bạn" style={{ paddingRight: '9rem' }} />
                    <button className='btn btn-success position-absolute' style={{ right: 28, top: 8 }}>Gửi câu hỏi</button>
                </div>
                <div className='users col-12 mt-4'>
                    <div className='user d-flex'>
                        <div className='rounded text-white bg-success d-flex justify-content-center align-items-center text-uppercase font-weight-bold'
                            style={{ width: 50, height: 50, minWidth: 50, minHeight: 50 }}>L</div>
                        <div className='ml-2'>
                            <div className='title d-flex align-items-baseline'>
                                <h6 className='text-capitalize mb-0'>Lê Hy</h6>
                                <span className='ml-2 text-muted small'>100 ngày trước</span>
                            </div>
                            <div className='content'>đóng gói cẩn thận giao hàng nhanh date xa
                                cám ơn bạn đã ủng hộ shop, chúc bạn 1 ngày vui vẻ, nếu gặp vấn đề gì
                                về sản phẩm đừng ngần ngại phản hồi cho shop để được hỗ trợ nha
                            </div>
                            <div className='option d-flex mt-2' style={{ gap: 10, fontSize: 13 }}>
                                <div className='text-success ' style={{ cursor: 'pointer' }}>Trả lời</div>
                                <div className='text-warning' style={{ cursor: 'pointer' }}>Sửa</div>
                                <div className='text-danger' style={{ cursor: 'pointer' }}>Xóa</div>
                            </div>
                        </div>
                    </div>
                    <div className='reply ml-5 mt-3 pl-3' style={{ borderLeft: '5px solid green' }}>
                        <div className='ml-2'>
                            <div className='title d-flex align-items-baseline'>
                                <h6 className='text-capitalize mb-0'>Lê Hy</h6>
                                <span className='ml-2 text-muted small'>100 ngày trước</span>
                            </div>
                            <div className='content'>đóng gói cẩn thận giao hàng nhanh date xa
                                cám ơn bạn đã ủng hộ shop, chúc bạn 1 ngày vui vẻ, nếu gặp vấn đề gì
                                về sản phẩm đừng ngần ngại phản hồi cho shop để được hỗ trợ nha
                            </div>
                        </div>
                    </div>
                </div>
                <div className='users col-12 mt-4'>
                    <div className='user d-flex'>
                        <div className='rounded text-white bg-success d-flex justify-content-center align-items-center text-uppercase font-weight-bold'
                            style={{ width: 50, height: 50, minWidth: 50, minHeight: 50 }}>L</div>
                        <div className='ml-2'>
                            <div className='title d-flex align-items-baseline'>
                                <h6 className='text-capitalize mb-0'>Lê Hy</h6>
                                <span className='ml-2 text-muted small'>100 ngày trước</span>
                            </div>
                            <div className='content'>đóng gói cẩn thận giao hàng nhanh date xa
                                cám ơn bạn đã ủng hộ shop, chúc bạn 1 ngày vui vẻ, nếu gặp vấn đề gì
                                về sản phẩm đừng ngần ngại phản hồi cho shop để được hỗ trợ nha
                            </div>
                            <div className='option d-flex mt-2' style={{ gap: 10, fontSize: 13 }}>
                                <div className='text-success ' style={{ cursor: 'pointer' }}>Trả lời</div>
                                <div className='text-warning' style={{ cursor: 'pointer' }}>Sửa</div>
                                <div className='text-danger' style={{ cursor: 'pointer' }}>Xóa</div>
                            </div>
                        </div>
                    </div>
                    <div className='reply ml-5 mt-3 pl-3' style={{ borderLeft: '5px solid green' }}>
                        <div className='ml-2'>
                            <div className='title d-flex align-items-baseline'>
                                <h6 className='text-capitalize mb-0'>Lê Hy</h6>
                                <span className='ml-2 text-muted small'>100 ngày trước</span>
                            </div>
                            <div className='content'>đóng gói cẩn thận giao hàng nhanh date xa
                                cám ơn bạn đã ủng hộ shop, chúc bạn 1 ngày vui vẻ, nếu gặp vấn đề gì
                                về sản phẩm đừng ngần ngại phản hồi cho shop để được hỗ trợ nha
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupAndAns;