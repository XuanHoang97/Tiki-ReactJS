import React from 'react';
import { useSelector } from 'react-redux';
import { productsCartMenuState$ } from 'redux/selectors';
import ContactDeliver from './ContactDeliver';
import DeliverPayments from './DeliverPayments';
import MethodPayment from './MethodPayment';

function Payment() {
    const productsCart = useSelector(productsCartMenuState$)

    return (
        <div className="main bg-light pt-3 pb-3">
            <div className="container">
                <div className="row m-1 justify-content-between">
                    <div className="col-md-9 pl-0 ">
                        <div className="bg-white p-3">
                            <DeliverPayments productsCart={productsCart} />
                            <MethodPayment />
                        </div>
                    </div>
                    <ContactDeliver productsCart={productsCart} />
                </div>
            </div>
        </div>
    );
}
export default Payment;
