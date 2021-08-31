import React from 'react';
import PropTypes from 'prop-types';

Rate.propTypes = {
    
};

function Rate(props) {
    return (
        <div className="rate">
            <div className="vote">
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star checked text-warning small" />
                <span className="fa fa-star text-secondary small" />
                <span className="fa fa-star text-secondary small" />
            </div>
            <span className="">Đã bán 111</span>
        </div>
    );
}

export default Rate;