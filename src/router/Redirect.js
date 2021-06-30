import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Product_detail from '../pages/product/Product_detail';
import Body from '../components/body/Body';
import Cart from '../pages/cart/Cart';
import Cart1 from '../pages/cart/Cart1';
import Payment from '../pages/payment/Payment';
import Order_success from '../pages/cart/Order_success';
class Redirect extends Component {
    render() {
        return (
            
            <div>
                <Switch>
                    <Route exact path="/"><Body /></Route>
                    {/* <Route exact path="/chi-tiet-san-pham/:slug.:id.html"><Product_detail /></Route> */}
                    <Route exact path="/chi-tiet-san-pham/:id"><Product_detail /></Route>
                    <Route exact path="/gio-hang-0"><Cart /></Route>
                    <Route exact path="/gio-hang-1"><Cart1 /></Route>
                    <Route exact path="/thanh-toan"><Payment /></Route>
                    <Route exact path="/dat-hang-thanh-cong"><Order_success /></Route>
                </Switch>
            </div>
        );
    }
}

export default Redirect;