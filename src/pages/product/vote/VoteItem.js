import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/actions/vote';

function VoteItem(props) {

    return (
        <div className="row mb-3 ml-0">
            <div className="avatar"><img src={props.img} alt="" /></div>
            <div className="ml-2 account__chat">
                <div className="title d-flex align-items-baseline">
                    <h6 className="text-capitalize mb-0">{props.name}</h6>
                    <span className="badge badge-warning text-white ml-2">User</span>
                    <span className="ml-2 text-muted small">1 giây trước</span>
                </div>

                <div className="content">{props.comment}</div>
                <div className="option mt-2" >
                    <div onClick={props.replyVote} className="text-success"> Trả lời </div>
                    <div onClick={props.editVote} className="text-primary"> Sửa</div>
                    <div onClick={props.deleteVote} className="text-danger"> Xoá </div>
                </div>
            </div>
        </div>
    );
}

export default VoteItem;