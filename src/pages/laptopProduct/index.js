import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { numberFormat } from "contants/NumberFormat";
import { cartCountMenuState$, laptopDetailState$ } from "redux/selectors";
import Order from "./Order";
import { addProduct, downCount, upCount } from "redux/actions/cart";

const Laptop_detail = ({ match }) => {
  const [data, setData] = useState([]);
  const laptopDetail = useSelector(laptopDetailState$)
  const dispatch = useDispatch()

  let number = useSelector(cartCountMenuState$)
  //tang so luong
  const handleUp = () => {
    dispatch(upCount())
  }
  //giam so luong
  const handleDown = () => {
    if (number > 1)
      dispatch(downCount())
  }

  useEffect(() => {
    data.length > 0 && dispatch(addProduct(data[0]))
  }, [data, dispatch])

  useEffect(() => {
    const fetchLaptop = () => {
      axios.get(`https://y6896.sse.codesandbox.io/product_laptop/?id=${match.params.id}`)
        .then((res) => { setData(res.data); })
        .catch((err) => console.log(err));
    };
    !laptopDetail && fetchLaptop();
  }, [laptopDetail, match.params.id]);


  return (
    <div className="main bg-light pt-3 pb-3">
      <div className="container">
        <h5>Chi tiết sản phẩm</h5>
        <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
          <div className="col-md-3 p-0 text-left">
            {(laptopDetail ? [laptopDetail] : data).map((item) => {
              return (
                <div key={item.id}>
                  <img className="w-75" src={item.img} alt={item.name} />
                </div>
              );
            })}
          </div>

          {(laptopDetail ? [laptopDetail] : data).map((prod, key) => {
            return (
              <div className="col-md-6 pl-4 pr-2 text-left" key={prod.id}>
                <h5>{prod.name}</h5>

                <div className="price bg-light p-2 row align-items-center">
                  <div className="row m-1 align-items-center">
                    <h4 className="text-danger">{numberFormat(prod.price)}</h4>
                  </div>
                  <span className="badge badge-pill badge-warning ml-3 mr-4">
                    -{prod.sale_off}%
                  </span>

                  <strike className="small">
                    {numberFormat(prod.price_old)}
                  </strike>
                </div>

                <Order order={laptopDetail ? laptopDetail : data[0]}
                  handleUp={handleUp}
                  handleDown={handleDown}
                  number={number} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Laptop_detail;
