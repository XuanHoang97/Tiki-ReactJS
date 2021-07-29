import React, { useState, useEffect } from "react";
import axios from "axios";
import TabMenu from "./TabMenu";

export default function Category(props) {
  const [listMenu, setListMenu] = useState([]);
  const [detailMenu, setDetailMenu] = useState([]);
  const [hover, setHover] = useState(false)
  const [navhover, setNavHover] = useState(false)

  useEffect(() => {
    axios.get(`https://y6896.sse.codesandbox.io/category_menu`)
      .then((res) => { setListMenu(res.data) })
      .catch((err) => {
        console.log(err);
        alert("Lỗi không load được sản phẩm từ Api");
      });

  }, []);   //Empty arr: ko phụ thuộc vào thằng nào cả, chỉ chạy đÚng 1 lần

  return (
    <li className="menu_ctg nav-item dropdown mr-2 active"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => (setHover(false))}
    >
      <a className="category nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-bars mr-2" />
        <small>Danh mục</small>
        <br />
        <span>Sản phẩm</span>
      </a>

      {hover ? <div className="dropdown-menu" aria-labelledby="dropdown" style={{ top: "3.5rem", display: "block", left: "-3.5em" }}>
        {listMenu.map((menu) => {
          return (

            <React.Fragment key={menu.id} >
              <div className="category"
                onMouseEnter={() => (setDetailMenu(menu.detail))}
              >
                <a className="dropdown-item" href="/">
                  <i className={menu.icon} />
                  <small>{menu.item}</small>
                  <div className="menu__item">
                    {
                      detailMenu.map((element) => {
                        return <TabMenu key={element.id}
                          feature={element.feature}
                          product={element.product}
                        />
                      })
                    }
                    <div className="col-md-3">
                      <img
                        src="https://salt.tikicdn.com/ts/banner/58/4c/1f/504d88acdbc1d7b72f35743be0baa4e6.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </a>

              </div>
            </React.Fragment>
          );
        })}
        {/* {navhover ? <div className="menu__item"
          style={{ display: (hover ? 'flex' : 'none'), width: "800px", position: "absolute", top: 0, left: "14.5em", background: "rgb(235 247 255)", padding: "15px", }}

        >
          {
            detailMenu.map((element) => {
              return <TabMenu key={element.id} feature={element.feature} product={element.product} />
            })
          }
          <div className="col-md-3">
            <img
              src="https://salt.tikicdn.com/ts/banner/58/4c/1f/504d88acdbc1d7b72f35743be0baa4e6.jpg"
              alt=""
            />
          </div>
        </div> : ""} */}
      </div>
        : ''}
    </li>
  )
}
