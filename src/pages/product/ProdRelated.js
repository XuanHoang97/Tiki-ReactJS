import React from 'react';

function ProdRelated(props) {
    return (
        <div className="product--item col-md-3 col-6">
            <img src={props.img} alt="" />
            <h6 className="mt-1 mb-3 text-center text-danger">{props.name}</h6>
        </div>
    );
}

export default ProdRelated;