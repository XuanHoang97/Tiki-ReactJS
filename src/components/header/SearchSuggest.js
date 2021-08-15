import React, { useEffect, useState } from 'react';

function SearchSuggest({ dataSearch, show, blur, search }) {
    const [data, setData] = useState('')
    const [showData, setShowData] = useState(true)
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

                <div className="search__popular">
                    <img src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png" alt="" />
                    <span>Tìm kiếm phổ biến</span>
                </div>
                <div className="list__search row">
                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>

                    <div className="list__item col-md-4">
                        <img src="https://salt.tikicdn.com/cache/280x280/ts/product/bc/8c/45/ed78f077e72d0c7719f506eeb04e30d7.jpg" alt="" />
                        <span>Toeic</span>
                    </div>
                </div>
            </div>)
                :
                (<div className="search__info" >
                    {dataSearch.length !== 0 && dataSearch ? dataSearch.map((item, i) =>
                    (
                        <div className="search__items" style={{ cursor: 'pointer' }} key={i}>
                            <span>{item.name}</span>
                            <hr />
                        </div>)
                    ) : <div>Không tìm thấy kết quả</div>}

                </div>)}
            <div className='blur'
                onClick={blur}
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: '50', background: '#ccc', opacity: 0.3 }}
            ></div>
        </div>
    );
}

export default React.memo(SearchSuggest);