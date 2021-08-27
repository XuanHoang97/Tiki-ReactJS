import React from "react";
import ProdRelated from './ProdRelated';

const ProductSimilar = () => {

    // Call api

    return (
        <>
            <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
            <div className="row bg-white pt-4 pb-4 p-3 m-1">
                <ProdRelated />
                <ProdRelated />
                <ProdRelated />
                <ProdRelated />
            </div>
        </>
    );
}

export default ProductSimilar;