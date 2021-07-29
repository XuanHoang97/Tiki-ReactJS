import React from 'react';

function TabMenu(props) {
    return (
        <div className="col-md-3">
            <h6 style={{ color: 'black' }}>{props.feature}</h6>
            <div style={{ color: 'black' }}>{props.product}</div>
        </div>
    );
}

export default TabMenu;