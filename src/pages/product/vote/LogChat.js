import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteState$ } from 'redux/selectors';
import * as actions from '../../../redux/actions';
import VotePagination from './VotePagination';

function DataVote(props) {
    return (
        <div className="row mb-3 ml-0">
            <div className="avatar"><img src={props.img} alt="" /></div>
            <div className="ml-2 account__chat">
                <div className="title d-flex align-items-baseline">
                    <h6 className="text-capitalize mb-0">{props.name}</h6>
                    <span className="badge badge-warning text-white ml-2">User</span>
                    <span className="ml-2 text-muted small">1 ngày trước</span>
                </div>

                <div className="content">{props.comment}</div>
                <div className="option mt-2" >
                    <div className="text-success"> Trả lời </div>
                    <div className="text-primary"> <i className="fas fa-pencil-alt"></i></div>
                    <div className="text-danger"> <i className="far fa-trash-alt"></i> </div>
                </div>
            </div>
        </div>
    )
}

function LogChat() {
    const vote = useSelector(voteState$)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getDataVote.getVoteRequest())
    }, [])
    return (
        <div className="users col-md-12">
            <div className="user">
                {
                    vote && vote.map((data, key) => (
                        <DataVote key={data.id} img={data.avatar} name={data.name} comment={data.comment} />
                    ))
                }
            </div>

            <div className="reply ml-5 mt-3 p-2 pl-3 bg-light">
                <div className="ml-2">
                    <div className="title d-flex align-items-baseline">
                        <h6 className="text-capitalize mb-0">Lê Xuân Hoàng</h6>
                        <span className="badge badge-success ml-2">Admin</span>
                        <span className="ml-2 text-muted small">1 ngày trước</span>
                    </div>
                    <div className="content">Tks you</div>
                </div>
            </div>

            <VotePagination />
        </div>
    );
}

export default LogChat;