import React from 'react';

function TabMenu(props) {
    return (
        <div className="col-md-3">
            <div>
                <h6>{props.feature}</h6>
                <div><a href="">{props.product}</a></div>
            </div>
        </div>

    );
}

export default TabMenu;