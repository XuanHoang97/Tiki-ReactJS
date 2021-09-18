import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "redux/actions/vote";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { createChat, updatesChat } from "redux/actions/chat";
import { usernameState$ } from "redux/selectors/account";

const ErrorComment = styled.p`
  margin-top: 10px;
  color: red
`

function FormVote(props) {

  const { register, formState: { errors }, handleSubmit } = useForm()
  const username = useSelector(usernameState$)
  const chatEditting = useSelector((state) => state.logChat.chatEditting)

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    if (chatEditting && chatEditting._id) {
      dispatch(updatesChat.updatesChatRequest({
        comment: e.comment
      }))
    } else {
      dispatch(createChat.createChatRequest({
        comment: e.comment,
        productId: props.params,
        username
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="vote" onClose={() => dispatch(hideModal())}>
        <input
          className='name'
          {...register('comment', { required: "This input is required." })}
        />
        <ErrorComment>{errors.comment?.type === 'required' && "First name is required"}</ErrorComment>
        <div className="control">
          <button onClick={() => dispatch(hideModal())} type="button" className="btn btn-light btn-sm"> HUỶ BỎ </button>
          <button type="submit" className="btn btn-primary btn-sm"> LƯU LẠI </button>
        </div>
      </div>
    </form>
  );
}

export default FormVote;
