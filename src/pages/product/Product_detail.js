import axios from "axios";
import Mail from "components/body/Mail";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, downCount, upCount } from "redux/actions/cart";
import { cartProductMenuState$ } from "redux/selectors";
import { cartCountMenuState$ } from "redux/selectors";
import { numberFormat } from "contants/NumberFormat";
import Offer from "./Offer";
import Order from "./Order";
import ProductDesc from "./ProductDesc";
import SpecialFeature from "./SpecialFeature";
import Specifications from "./Specifications";
import Illutrator from "./Illutrator";
import Rate from "./vote/Rate";
import Vote from "./Vote";
import ProdRelated from "./ProdRelated";
import { addParmas } from "redux/actions/chat";

const Product_detail = ({ match }) => {
  const [data, setData] = useState([]);
  const TITLE = 'Điện thoại ngon - bổ - rẻ';
  const dataProDetail = useSelector(cartProductMenuState$)
  const dispatch = useDispatch()
  let count = 1;
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
    let isSubscribe = true
    function fetchProduct() {
      axios.get(`https://api-tiki-clone.herokuapp.com/api/v2/product_mobile/?id=${match.params.id}`)
        .then((res) => {
          if (isSubscribe && res.status === 200) {
            const { data = null } = res;
            setData(data)
          }
        })
        .catch((err) => console.log(err))
    };
    !dataProDetail && fetchProduct();
    dispatch(addParmas(match.params.id))

    return () => {
      isSubscribe = false
    }
  }, [dataProDetail, match.params.id, dispatch]);

  return (
    <div className="main bg-light pt-3 pb-3">
      <Helmet> <title>{TITLE}</title></Helmet>
      <div className="container">
        <h6 className="mb-2">CHI TIẾT SẢN PHẨM</h6>
        <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
          <div className="col-md-3 p-0 text-left">
            {(dataProDetail ? [dataProDetail] : data).map((item) => {
              return (
                <div key={item._id}>
                  <img className="w-75" src={item.img} alt="loi" />
                  <Illutrator />
                </div>
              );
            })}
            <SpecialFeature />
          </div>

          {(dataProDetail ? [dataProDetail] : data).map((prod, key) => {
            return (
              <div className="col-md-6 pl-4 pr-2 text-left" key={key}>
                <h5>{prod.name}</h5>
                <Vote />

                <div className="price bg-light p-2">
                  <div className="row m-1 align-items-center">
                    <h4>{numberFormat(prod.price)}</h4>
                    <span className="badge badge-pill badge-danger ml-3 mr-4">
                      -{prod.sale_off}%
                    </span>
                    <strike className="small">{numberFormat(prod.price_old)}</strike>
                  </div>
                </div>
                <Order
                  order={dataProDetail ? dataProDetail : data[0]}
                  handleUp={handleUp}
                  handleDown={handleDown}
                  number={number}
                />
              </div>
            );
          })}
          <Offer bonus={dataProDetail ? [dataProDetail] : data} />
        </div>
        <Specifications />
        <ProductDesc />
        <Rate params={match.params.id} />

        {/* ProductRelated  */}
        <div>
          <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
          <div className="row bg-white pt-4 pb-4 p-3 m-1">
            {
              data.map((value) => {
                if (value._id !== match.params.id) {
                  if (count <= 4) {
                    count++;
                    return (
                      <ProdRelated key={value._id} img={value.img} name={value.name} />
                    )
                  }
                  else {
                    return '';
                  }
                } else {
                  return '';
                }
              })
            }
          </div>
        </div>
        <Mail />
      </div>
    </div>
  );
};
export default Product_detail;
