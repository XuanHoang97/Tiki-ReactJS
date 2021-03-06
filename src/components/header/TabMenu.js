import React from 'react';
import { Link } from 'react-router-dom';

export default function TabMenu(props) {
    return (
        <div className="col-md-3">
            <h6 style={{ color: 'black' }}>{props.feature}</h6>
            <div ><Link to={`/${props.product?.split(' ')?.join('-')?.toLowerCase()}-${props.id}`} onClick={props.offMenu}>{props.product}</Link>
                <img src={props.img} alt="" />
            </div>
        </div>
    );
}
