import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { catagoryMenuState$ } from "redux/selectors";
import * as actions from "../../redux/actions";
import TabMenu from "./TabMenu";

export default function Category() {
  const [detailMenu, setDetailMenu] = useState([]);
  const [hover, setHover] = useState(false)

  const catagoryMenu = useSelector(catagoryMenuState$)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getDataCatagoryMenu.getCatagoryMenuRequest())
  }, [dispatch]);

  const offPreDefault = () => {
    setHover(false)
  }

  return (
    <li className="menu_ctg nav-item dropdown mr-2 active"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => (setHover(false))}
    >
      <a className="category nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false"
        style={{ padding: '10px 15px' }}>
        <i className="fas fa-bars mr-2" />
        <small>Danh mục</small>
        <br />
        <span style={{ fontSize: '15px' }}>Sản phẩm</span>
      </a>

      {hover ? <div className="dropdown-menu list__product" aria-labelledby="dropdown" style={{ top: "3.5rem", display: "block", left: "-3.5em" }}>
        {catagoryMenu.map((menu) => {
          return (
            <React.Fragment key={menu._id} >
              <Link className="category" to={`/do-dung/${menu.item}.html`}
                onMouseEnter={() => (setDetailMenu(menu.detail))}
              >
                <div className="dropdown-item drop__menu" >
                  <div onClick={() => (setHover(false))}>
                    <i className={menu.icon} />
                    <small >{menu.item}</small>
                  </div>

                  <div className="menu__item" style={{ cursor: "default" }} onClick={e => (e.preventDefault())}>
                    {
                      detailMenu.map((element) => {
                        return <TabMenu key={element.id}
                          id={element.id}
                          feature={element.feature}
                          product={element.product}
                          img={element.img}
                          offMenu={() => offPreDefault()}
                        />
                      })
                    }
                  </div>
                </div>

              </Link>
            </React.Fragment>
          );
        })}
      </div>
        : ''}
    </li>
  )
}
