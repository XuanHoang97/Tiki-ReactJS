import React, { useState, useEffect } from "react";
import axios from "axios";
import Prod_Related from './Prod_Related';

// Product_similar.propTypes = {

// };

const Product_similar = ({ }) => {
    const [prodRelated, setProdRelated] = useState([]);

    useEffect(() => {
        fetchProdRelated();
    }, []);

    // Call api
    const fetchProdRelated = () => {
        axios.get(`https://y6896.sse.codesandbox.io/product_mobile`)
            .then((res) => { setProdRelated(res.data);})
            .catch((err) => console.log(err));
    };


    // function Product_similar(props) {
    return (
        <div className="row bg-white pt-4 pb-4 p-3 m-1">
            {/* {
                    prodRelated.map(related=>{
                        return (
                            <Prod_Related key={related.id } prod={prodRelated} />
                        );
                    })
                } */}

            <Prod_Related />
            <Prod_Related />
            <Prod_Related />
            <Prod_Related />
        </div>
    );
    // }
}

export default Product_similar;