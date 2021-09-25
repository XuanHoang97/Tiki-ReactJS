import { convertTime } from 'contants/timeChat';
import React from 'react';
import { useSelector } from 'react-redux';
import { usernameState$ } from 'redux/selectors/account';
import styled from 'styled-components';

const Image = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    background: #ccc;
    align-items: center;
    justify-content: center;
    font-weight: bold
`
function VoteItem(props) {

    const username = useSelector(usernameState$)

    return (
        <div className="row mb-3 ml-0">
            <Image className="avatar">
                {props.img ? <img src={props.img} alt="" /> : props.name.charAt(0).toUpperCase()}
            </Image>
            <div className="ml-2 account__chat">
                <div className="title d-flex align-items-baseline">
                    <h6 className="text-capitalize mb-0">{props.name}</h6>
                    <span className="badge badge-warning text-white ml-2">User</span>
                    <span className="ml-2 text-muted small">{convertTime(props.time)}</span>
                </div>

                <div className="content">{props.comment}</div>
                <div className="option mt-2" >
                    <div onClick={props.replyVote} className="text-success"> Trả lời </div>
                    {username === props.name ? (
                        <>
                            <div onClick={props.editVote} className="text-primary"> Sửa</div>
                            <div onClick={props.deleteVote} className="text-danger"> Xoá </div>
                        </>
                    ) : ''}
                </div>
            </div>
        </div>
    );
}
export default VoteItem;