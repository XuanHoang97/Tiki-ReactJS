import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { preferentState$ } from "redux/selectors";
import * as actions from '../../redux/actions'

export default function Preferential() {
    const preferent = useSelector(preferentState$)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getDataPreferent.getPreferentRequest())
    }, [])

    let dem = 1;
    return (
        <div className="voucher row bg-white mt-3 pt-3 p-2 m-0">
            {preferent.map((pref) => {
                if (dem <= 12) {
                    dem++;
                    return (
                        <React.Fragment key={pref._id}>
                            <div className="col-md-1 col-3 p-1 text-center" style={{ cursor: 'pointer' }}>
                                <Link to="*">
                                    <img className="w-50" src={pref.img} alt="" />
                                    <p className="small mt-2 mb-0 text-dark">{pref.content}</p>
                                </Link>
                            </div>
                        </React.Fragment>
                    );
                }
                else {
                    return null
                }
            })}
        </div>
    );
}
