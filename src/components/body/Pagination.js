import React from 'react';
// import PropTypes from 'prop-types';

pagination.propTypes = {

};

function pagination(props) {
    return (
        <ul className="pagination pagination-sm mb-0 w-100 justify-content-center">
            <li className="page-item"><a className="page-link" href="#">
                <i className="fas fa-chevron-left"></i>
            </a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item "><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">
                <i className="fas fa-chevron-right"></i>
            </a></li>
        </ul>
    );
}

export default pagination;