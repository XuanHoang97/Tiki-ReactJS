import React from 'react';

function VotePagination(props) {
    return (
        <div>
            <ul class="pagination pagination-sm mt-4 justify-content-end">
                <li class="page-item"><a class="page-link"><i class="fas fa-chevron-left"></i></a></li>
                <li class="page-item active"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">3</a></li>
                <li class="page-item"><a class="page-link">4</a></li>
                <li class="page-item"><a class="page-link">5</a></li>
                <li class="page-item"><a class="page-link"><i class="fas fa-chevron-right"></i></a></li>
            </ul>
        </div>
    );
}

export default VotePagination;