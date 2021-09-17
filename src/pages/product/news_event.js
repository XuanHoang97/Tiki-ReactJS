import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import { newState$ } from 'redux/selectors';

function News_Event(props) {
    const news = useSelector(newState$)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getDataNew.getNewRequest())
    }, [dispatch])

    return (
        <div className="col-md-4">
            <h5 className="mb-4">Tin tức và sự kiện</h5>
            <div className="list_news row pl-3">
                {
                    news.map(data => (
                        <div className="row mb-2 col-md-12 p-0" key={data._id}>
                            <img className="col-md-4" src={data.img} alt="" />
                            <small className="col-md-8 p-0">{data.content}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default News_Event;