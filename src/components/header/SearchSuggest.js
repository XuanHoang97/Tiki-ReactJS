import React, { useEffect, useState } from 'react';
import MoreSuggest from './MoreSuggest';

function SearchSuggest({ dataSearch, show, blur, search }) {
    const [data, setData] = useState('');
    const [showData, setShowData] = useState(true);
    const [suggest, setSuggest] = useState(false);

    useEffect(() => {
        if (search === '') {
            setData('')
            setShowData(true)
        } else {
            setShowData(false)
        }
    }, [search])
    return (
        <div className="search-form" style={{ display: (show ? 'block' : 'none') }}>
            {showData ? (<div className="search__info" >
                <div className="suggest">
                    <div className="coupon">
                        <h6>TikiNGON - Freeship Đơn từ 149k </h6>
                        <img src="https://salt.tikicdn.com/cache/140x28/ts/banner/ef/48/37/0001229343177efca40954a1f6779387.png" alt="" />
                    </div>

                    <div className="history">
                        <div className="item_log">
                            <img src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png" alt="" />
                            <span>Phone</span>
                        </div>
                        <div className="close text-right">
                            <img src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png" alt="" />
                        </div>
                    </div>

                    <div className="history">
                        <div className="item_log">
                            <img src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png" alt="" />
                            <span>Áo thun nam</span>
                        </div>
                        <div className="close text-right">
                            <img src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png" alt="" />
                        </div>
                    </div>

                    <div className="history">
                        <div className="item_log">
                            <img src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png" alt="" />
                            <span>Điện thoại - phụ kiện</span>
                        </div>
                        <div className="close text-right">
                            <img src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png" alt="" />
                        </div>
                    </div>

                    {suggest && <MoreSuggest />}
                    {!suggest ?
                        <div className="text-center">
                            <div className="viewMore" onClick={() => setSuggest(true)}>
                                <span>Xem thêm</span><i className="fas fa-sort-down"></i>
                            </div>
                        </div>

                        : <div className="text-center">
                            <div className="viewMore" onClick={() => setSuggest(false)}>
                                <span>Thu gọn</span><i className="fas fa-sort-up"></i>
                            </div>
                        </div>
                    }
                </div>

                <div className="list__search">
                    <div className="search__popular">
                        <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="" />
                        <span>Tìm kiếm phổ biến</span>
                    </div>

                    <div className="pop">
                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/40/44/85/89b7d44e0f944a6796bd845186535ed8.jpg" alt="" />
                            <span>Sách tiếng anh</span>
                        </div>

                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/media/catalog/product/o/m/omron-hem-7120-bp-monitor-2.u499.d20160622.t145322.jpg" alt="" />
                            <span>Máy đo huyết áp</span>
                        </div>

                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/53/79/c6/ec922b3f401473794c71ed61e56f6a34.jpg" alt="" />
                            <span>Warrent buffet</span>
                        </div>

                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/33/98/d6/e56eee7384c071c95836577ee6b83eb5.jpg" alt="" />
                            <span>light novel</span>
                        </div>

                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d4/51/3f/7d3b6cb9e1e465235fbae6e27280c326.jpg" alt="" />
                            <span>Dừa xiêm gọt trọc</span>
                        </div>

                        <div className="list__item">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/9a/9c/59/4e655cff35d1b3d095209eb8dd82406a.jpg" alt="" />
                            <span>Plato và con thú mỏ vịt bước vào quán bar</span>
                        </div>
                    </div>

                </div>

                <div className="special__prod">
                    <h6>Danh Mục Nổi Bật</h6>
                    <div className="list__prod">
                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/12/de/70/1f406e01a8e9eeb625fec5a1a29b2707.jpg" alt="" />
                            <span>Trái cây nội địa</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/38/03/27/da8bf5951313326908cd2504c9f4590b.jpg" alt="" />
                            <span>Sách kỹ năng làm việc</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/55/54/80/cbc1b257c0051a740492b2427425001e.jpg" alt="" />
                            <span>Tiểu sử-Hồi ký</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/54/55/d6/4ceb6ba3bd81614df8ff4c1411b11f59.jpg" alt="" />
                            <span>Truyện ngắn - Tản văn</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d5/53/0e/fc00028419754638dd5b250abbcb0de7.jpg" alt="" />
                            <span>Sách học tiếng anh</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/cache/280x280/ts/product/b1/80/77/256a28f588c20782d1eeecb949c0be1a.jpg" alt="" />
                            <span>How to - Self help</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png" alt="" />
                            <span>Nhà sách Tiki</span>
                        </div>

                        <div className="item--prod">
                            <img src="https://salt.tikicdn.com/ts/category/3c/e4/99/eeee1801c838468d94af9997ec2bbe42.png" alt="" />
                            <span>Hàng quốc tế</span>
                        </div>

                    </div>
                </div>
            </div>)

                :
                (<div className="search__info">
                    {dataSearch.length !== 0 && dataSearch ? dataSearch.map((item, i) =>
                    (
                        <div className="search__items" key={i}>
                            <small style={{ fontWeight: '500' }}>
                                <img src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png" alt="" style={{ width: '6%' }} />
                                {item.name}
                            </small>
                        </div>)
                    ) : <div className="text-primary small pl-3 p-2">Không tìm thấy kết quả</div>}
                </div>)}

            <div className='blur'
                onClick={blur}
            ></div>
        </div>
    );
}

export default React.memo(SearchSuggest);