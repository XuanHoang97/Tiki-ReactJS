import './../assets/css/App.scss';
import Header from './header/Header';
import Body from './body/Body';
import Product_detail from '../pages/product/Product_detail';
import Cart from '../pages/cart/Cart';
import Cart1 from '../pages/cart/Cart1';
import Payment from '../pages/payment/Payment';
import OrderSuccess from '../pages/cart/OrderSuccess';
import Footer from './footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from '../router/scrollToTop';
import NotFound from './NotFound';
import ScrollTop from './ScrollTop';

console.warn = () => { };


function App() {
  return (
    <Router >
      <div>
        <ScrollToTop />
        <ScrollTop />
        <Header />
        {/* <Redirect /> */}
        <Switch>
          <Route exact path="/"><Body /></Route>
          <Route exact path='/chi-tiet-san-pham/:slug.:id.html' component={Product_detail} />
          <Route exact path="/gio-hang-0"><Cart /></Route>
          <Route exact path="/gio-hang-1"><Cart1 /></Route>
          <Route exact path="/thanh-toan"><Payment /></Route>
          <Route exact path="/dat-hang-thanh-cong"><OrderSuccess /></Route>
          <Route exact path="*"><NotFound /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
