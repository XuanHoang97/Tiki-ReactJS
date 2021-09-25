import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatState$ } from 'redux/selectors';

// import Reply from './Reply';
import VotePagination from './VotePagination';
import VoteItem from './VoteItem';
import { socket } from 'redux/sagas/chatSaga';
import { createChat, deletesChat, updatesChat } from 'redux/actions/chat';



function VoteList({ editVote, deleteVote, replyVote }) {
    const chatUser = useSelector(chatState$)
    const dispatch = useDispatch()
    useEffect(() => {
        socket.on("updatemessage", data => {
            dispatch(updatesChat.updatesChatSuccess(data))
        })
        return () => {
            socket.removeAllListeners("updatemessage")
        }
    }, [dispatch])
    useEffect(() => {
        socket.on("postmessage", data => {
            dispatch(createChat.createChatSuccess(data))
        })
        return () => {
            socket.removeAllListeners("postmessage")
        }
    }, [dispatch])
    useEffect(() => {
        socket.on("deletemessage", data => {
            dispatch(deletesChat.deletesChatSuccess(data))
        })
        return () => {
            socket.removeAllListeners("deletemessage")
        }
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
export default React.memo(VoteList);