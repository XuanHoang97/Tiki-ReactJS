import React from 'react';
import { Link } from 'react-router-dom';

function TabMenu(props) {
    return (
        <div className="col-md-3">
            <h6 style={{ color: 'black' }}>{props.feature}</h6>
            <div><Link to={`/${props.product}/${props.id}`}>{props.product}</Link></div>
        </div>
    );
}

export default TabMenu;