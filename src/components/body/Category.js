import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catagoryState$ } from "redux/selectors";
import {Link} from "react-router-dom";
import * as actions from '../../redux/actions'

export default function Category() {
    const dispatch = useDispatch()
    const catagory = useSelector(catagoryState$)

    useEffect(() => {
        dispatch(actions.getDataCatagory.getCatagoryRequest())
    }, [])

    let dem = 1;
    return (
        <div className="category__hightlight mt-3 p-3 bg-white">
            <h6><span className="text-danger">DANH MỤC NỔI BẬT</span></h6>
            <div className="list__category pt-4 pl-2 pr-2 row">
                {catagory ? catagory.map((ctg) => {
                    if (dem <= 12) {
                        dem++;
                        return (
                            <React.Fragment key={ctg.id}>
                                <div className="col-md-1 col-4 p-0 text-center" style={{ cursor: 'pointer' }}>
                                    <Link to="*">
                                        <img className="w-50 rounded-circle" src={ctg.img} alt="" />
                                        <h6 className="small pt-2 text-dark" style={{ fontSize: '12px' }}>{ctg.content}</h6>
                                    </Link>
                                </div>
                            </React.Fragment>
                        );
                    } else {
                        return '';
                    }
                }) :
                    <div className="loader">Loading</div>
                }
            </div>
        </div>
    );
}