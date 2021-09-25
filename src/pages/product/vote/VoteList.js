import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatState$ } from 'redux/selectors';
import * as actions from '../../../redux/actions';
// import Reply from './Reply';
import VotePagination from './VotePagination';
import VoteItem from './VoteItem';

function VoteList({ editVote, deleteVote, replyVote }) {
    const chatUser = useSelector(chatState$)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getDataVote.getVoteRequest())
    }, [dispatch])

    return (
        <div className="users col-md-12">
            <div className="user">
                {
                    chatUser && chatUser.map((vote, key) => (
                        <VoteItem key={vote._id}
                            img={vote.imgUser}
                            name={vote.name}
                            comment={vote.comment}
                            replyVote={() => replyVote(vote)}
                            editVote={() => editVote(vote)}
                            deleteVote={() => deleteVote(vote)}
                            time={vote.updatedAt}
                        />
                    ))
                }
            </div>
            {/* <Reply /> */}
            <VotePagination />
        </div>
    );
}
export default VoteList;