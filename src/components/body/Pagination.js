import React from 'react';
// import PropTypes from 'prop-types';

pagination.propTypes = {
    
};

function pagination(props) {
    return (
        <ul class="pagination pagination-sm mb-0 w-100 justify-content-center">
            <li class="page-item"><a class="page-link" href="#">
                <i class="fas fa-chevron-left"></i>
            </a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item "><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">
            <i class="fas fa-chevron-right"></i>
            </a></li>
        </ul>
    );
}

export default pagination;