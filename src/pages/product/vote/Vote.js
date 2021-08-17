import React from 'react';
import PropTypes from 'prop-types';

Vote.propTypes = {
    
};

function Vote(props) {
    return (
        <div className="rate row m-1 mt-3 mb-2 align-items-center">
            <span className="fa fa-star checked text-warning small" />
            <span className="fa fa-star checked text-warning small" />
            <span className="fa fa-star checked text-warning small" />
            <span className="fa fa-star text-secondary small" />
            <span className="fa fa-star text-secondary small" />
            <small className="ml-3">( Xem 46 đánh giá )</small>
        </div>
    );
}

export default Vote;