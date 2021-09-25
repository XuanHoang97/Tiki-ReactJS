import React from 'react';

function VotePagination(props) {
    return (
        <div>
            <ul className="pagination pagination-sm mt-4 justify-content-end">
                <li className="page-item"><a href='/#' className="page-link"><i className="fas fa-chevron-left"></i></a></li>
                <li className="page-item active"><a href='/#' className="page-link">1</a></li>
                <li className="page-item"><a href='/#' className="page-link">2</a></li>
                <li className="page-item"><a href='/#' className="page-link">3</a></li>
                <li className="page-item"><a href='/#' className="page-link">4</a></li>
                <li className="page-item"><a href='/#' className="page-link">5</a></li>
                <li className="page-item"><a href='/#' className="page-link"><i className="fas fa-chevron-right"></i></a></li>
            </ul>
        </div>
    );
}

export default VotePagination;