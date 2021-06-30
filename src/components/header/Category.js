import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Category(props) {
    const [listMenu, setListMenu] = useState([]);
    useEffect(() => {
        const getMenuAPI = 'https://y6896.sse.codesandbox.io/category_menu'
        axios.get(getMenuAPI).then((res) => {setListMenu(res.data);})
        .catch((err) => { console.log(err); alert("Lỗi không load được sản phẩm từ Api");})
    }, [])

    return (
        <li className="menu_ctg nav-item dropdown mr-2 active">
            <a className="category nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown"  data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bars mr-2" />
                <small>Danh mục</small><br />
                <span className>Sản phẩm</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId" style={{top:'3.5rem'}}>
                {listMenu.map((menu, index) => {
                    return (
                        <React.Fragment key={menu.id}>
                            <a className="dropdown-item" href="/"><i className={menu.icon}/><small>{menu.item}</small> </a>
                            
                            <div className="menu__item" style={{display:'none', position: 'absolute',top: 0,left: '15rem',background: 'white',padding: '10px 15px'}}>
                                abcd
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </li>
    );
}
