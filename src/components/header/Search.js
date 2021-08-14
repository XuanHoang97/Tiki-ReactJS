import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchSuggest from './SearchSuggest';

function Search() {
    const [suggest, setSuggest] = useState(false);
    const [mobile, setMobile] = useState([])
    const [search, setSearch] = useState('')
    const [allData, setAllData] = useState(['courses', 'category_menu', 'product_mobile'])
    const inputSearch = useRef(null)
    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        if (mobile) {
            setAllData(mobile.filter(items => items.name ? items.name.toLowerCase().includes(search.toLowerCase()) : ''))
        }
    }, [search])
    const fetchProducts = () => {
        allData.map(item => axios
            .get(`https://y6896.sse.codesandbox.io/${item}/`)
            .then(res => { setMobile(mobile => [...mobile, ...res.data]); })
            .catch((err) => { console.log(err); }))

    };
    const handleClickSearch = () => {
        setSuggest(false)
    }
    return (
        <div className="search input-group align-items-center">
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text" className="form-control"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                id="demo" name="email" style={{ borderRadius: '2px 0px 0px 2px', zIndex: 51 }}
                onFocus={() => setSuggest(true)}
                ref={inputSearch}
                autoComplete="off"
            />

            <SearchSuggest show={suggest} blur={() => setSuggest(false)} dataSearch={allData} search={search} />
            <Link to='/search'>
                <div
                    onClick={handleClickSearch}
                    className="btn_search input-group-append" style={{ height: '38px', width: "105px" }}>
                    <button type="button" className="btn btn-primary p-0" style={{ background: 'rgb(13, 92, 182)', zIndex: 51 }}>
                        <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className="mr-1" alt="" style={{ width: '15%' }} />
                        <small>Tìm kiếm</small>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default Search;