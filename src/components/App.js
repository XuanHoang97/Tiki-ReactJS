import './../assets/css/App.css';
import Header from './header/Header';
import Body from './body/Body';
import Product_detail from '../pages/product/Product_detail';
import Cart from '../pages/cart/Cart';
import Cart1 from '../pages/cart/Cart1';
import Payment from '../pages/payment/Payment';
import Order_success from '../pages/cart/Order_success';
import Footer from './footer/Footer';
import Redirect from './../router/Redirect';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button,Modal} from 'react-bootstrap';
import ScrollToTop from '../router/scrollToTop';

import axios from 'axios';
function App() {
  return (
    <Router >
      <div className="">
        <ScrollToTop />
        <Header />
        {/* <Redirect /> */}
        <Switch>
            <Route exact path="/"><Body /></Route>
            <Route exact path='/chi-tiet-san-pham/:slug.:id.html' component={Product_detail} />
            <Route exact path="/gio-hang-0"><Cart /></Route>
            <Route exact path="/gio-hang-1"><Cart1 /></Route>
            <Route exact path="/thanh-toan"><Payment /></Route>
            <Route exact path="/dat-hang-thanh-cong"><Order_success /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
