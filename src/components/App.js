import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./../assets/css/App.scss";
import Header from "./header/Header";
import Body from "./body/Body";
import Product_detail from "../pages/product/Product_detail";
import Cart from "../pages/cart/Cart";
import Cart1 from "../pages/cart/Cart1";
import Payment from "../pages/payment/Payment";
import OrderSuccess from "../pages/cart/OrderSuccess";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../router/scrollToTop";
import NotFound from "./NotFound";
import ScrollTop from "./ScrollTop";
import Result from "./header/search/Result";
import GlobalLoading from "./GlobalLoading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { productsCartMenuState$ } from "redux/selectors";
import Modals from 'components/Modal';
import Laptop_detail from "pages/laptopProduct";

console.warn = () => { };
// SEO Web
const TITLE = "Tiki - Mua hàng online giá tốt, hàng chuẩn, ship nhanh";

export default function App() {
  // Save data Cart 
  const productsCart = useSelector(productsCartMenuState$)

  return (
    <Router>
      <div>
        <ScrollToTop />
        <ScrollTop />
        <Header />
        <ToastContainer autoClose={3000} />
        <GlobalLoading />
        <Modals />
        <Switch>
          <Route exact path="/"> <Body /> </Route>
          <Route exact path="/Tiki-ReactJS"> <Body /> </Route>
          <Route exact path="/chi-tiet-san-pham/:slug.:id.html" component={Product_detail} />
          <Route exact path="/laptop/:slug.:id.html" component={Laptop_detail} />

          <Route exact path="/gio-hang">
            {productsCart.length > 0 ? <Cart1 /> : <Cart />}
          </Route>

          <Route exact path="/thanh-toan"><Payment /></Route>
          <Route exact path="/dat-hang-thanh-cong"><OrderSuccess /></Route>
          <Route exact path="/search/:slug.:id.html"><Result /></Route>
          <Route exact path="*"><NotFound /></Route>
        </Switch>
        <Helmet><title>{TITLE}</title></Helmet>
        <Footer />
      </div>
    </Router>
  );
}
