import axios from "axios";
import React, { useEffect, useState } from "react";
import ProdRelated from './ProdRelated';

const ProductSimilar = ({ }) => {
    const [prodRelated, setProdRelated] = useState([]);

    useEffect(() => {
        fetchProdRelated();
    }, []);

    // Call api
    const fetchProdRelated = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile`)
            .then((res) => { setProdRelated(res.data); })
            .catch((err) => console.log(err));
    };

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