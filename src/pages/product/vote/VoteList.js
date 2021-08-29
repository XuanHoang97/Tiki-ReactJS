import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteState$ } from 'redux/selectors';
import * as actions from '../../../redux/actions';
import Reply from './Reply';
import VotePagination from './VotePagination';
import VoteItem from './VoteItem';

function VoteList({editVote, deleteVote, replyVote}) {
    const vote = useSelector(voteState$)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getDataVote.getVoteRequest())
    }, [])

    return (
        <div className="users col-md-12">
            <div className="user">
                {
                    vote && vote.map((vote, key) => (
                        <VoteItem key={vote.id} 
                        img={vote.avatar} 
                        name={vote.name} 
                        comment={vote.comment}
                        replyVote={()=> replyVote(vote)}
                        editVote={()=> editVote(vote)} 
                        deleteVote={()=> deleteVote(vote)}
                        />
                    ))
                }
            </div>
            <Reply />
            <VotePagination />
        </div>
    );
}
export default VoteList;