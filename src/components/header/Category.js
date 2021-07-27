import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Category(props) {
  const [listMenu, setListMenu] = useState([]);
  const [detailMenu, setDetailMenu] = useState([]);

  useEffect(() => {
    axios.get(`https://y6896.sse.codesandbox.io/category_menu`)
      .then((res) => { setListMenu(res.data); })
      .catch((err) => { console.log(err); 
      alert("Lỗi không load được sản phẩm từ Api"); });
  }, []);   //Empty arr: ko phụ thuộc vào thằng nào cả, chỉ chạy đÚng 1 lần

  useEffect(() => {
    axios.get(`https://y6896.sse.codesandbox.io/category_menu`)
      .then((res) => { setDetailMenu(res.data); })
      .catch((err) => { console.log(err); 
      alert("Lỗi không load được sản phẩm từ Api"); });
  }, []);

  return (
    <li className="menu_ctg nav-item dropdown mr-2 active">
      <a className="category nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-bars mr-2" />
        <small>Danh mục</small>
        <br />
        <span className>Sản phẩm</span>
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownId" style={{ top: "3.5rem", display: "", left: "-3.5em" }}>
        {listMenu.map((menu, index) => {
          return (
            <React.Fragment key={menu.id}>
              <div className="category">
                <a className="dropdown-item" href="/">
                  <i className={menu.icon} />
                  <small>{menu.item}</small>{" "}
                </a>
              </div>
            </React.Fragment>
          );
        })}
        
        <div className="menu__item" style={{ display:"none", width: "800px", position: "absolute", top: 0, left: "14.5em", background: "rgb(235 247 255)", padding: "15px",}}>
          <div className="col-md-3">
            {
              detailMenu.map((item) => {
                return(
                  <React.Fragment key={item.id}> 
                      {
                        item.detail.map((i) =>
                        
                            <div key={i.id}>
                              <h6>{i.feature}</h6> 
                              <div><a href="">{i.product}</a></div>
                            </div>
                          
                      )}
                  </React.Fragment>
                );
              })
            }
          </div>

          <div className="col-md-3">
          {
              detailMenu.map((item) => {
                return(
                  <React.Fragment key={item.id}> 
                      {
                        item.detail.map((i) =>
                        
                            <div key={i.id}>
                              <h6>{i.feature}</h6> 
                              <div><a href="">{i.product}</a></div>
                            </div>
                          
                      )}
                  </React.Fragment>
                );
              })
            }
          </div>

          <div className="col-md-3">
          {
              detailMenu.map((item) => {
                return(
                  <React.Fragment key={item.id}> 
                      {
                        item.detail.map((i) =>
                        
                            <div key={i.id}>
                              <h6>{i.feature}</h6> 
                              <div><a href="">{i.product}</a></div>
                            </div>
                          
                      )}
                  </React.Fragment>
                );
              })
            }
          </div>

          <div className="col-md-3">
            <img
              src="https://salt.tikicdn.com/ts/banner/58/4c/1f/504d88acdbc1d7b72f35743be0baa4e6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </li>
  );
}
