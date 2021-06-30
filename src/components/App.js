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
import { tikiData } from '../APIs/firebaseConnect';

import axios from 'axios';
function App() {
  console.log(tikiData)
  return (
    <Router >
      <div className="">
        <ScrollToTop />
        <Header />
        <Redirect />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
