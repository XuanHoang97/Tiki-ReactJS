import React from 'react';
import Rate from '../Rate';

function ListProduct(props) {
    return (
        <div className="list__prod">
            <img src="https://salt.tikicdn.com/cache/w200/ts/product/58/ec/8a/117d32e6848e12d3074a51654f2a997f.jpg.webp" alt="" />
            <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
            <Rate />

            <div className="price">
                <span className="price_prod">185.000 đ</span>
                <span className="badge badge-danger">-6%</span>
            </div>
        </div>
    );
}
export default ListProduct;