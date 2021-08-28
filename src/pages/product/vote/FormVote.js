import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { hideModal } from "redux/actions/vote";
import renderTextField from "components/FormHelper/TextField";
import renderSelectField from "components/FormHelper/Select";
import renderTextAreaField from "components/FormHelper/TextField";
import validate from "./validate";
import { addChat, updateChat } from "../../../redux/actions/logchat";
import { createDataVote, updateDataVote } from "redux/actions";

function FormVote({ handleSubmit, invalid, submitting }) {
  const chatEditting = useSelector((state) => state.logChat.chatEditting);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2cafAJXiEVaaJbi2DgN4KppO2XjlaAh1eQ&usqp=CAU',
    name:'',
    comment:''
  })

  const handleSubmitForm = useCallback(() => {
    if(chatEditting && chatEditting.id){
      dispatch(updateDataVote.updateVoteRequest(data))
    }
    else{
      dispatch(createDataVote.createVoteRequest(data))
    }
  },[data,dispatch]);

  const renderPermissionSelection = () => {
    let xhtml = null;
    if (chatEditting && chatEditting.id) {
      xhtml = (
        <Field
          id="status"
          label="Phân quyền"
          className="select"
          name="permission"
          component={renderSelectField}
        >
          <option value={0}>User</option>
          <option value={1}>Admin</option>
        </Field>
      );
    }
    return xhtml;
  };

  return (   
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="vote" onClose={() => dispatch(hideModal())}>
        <Field
            id="name"
            label="Nhập tên"
            className="name"
            margin="normal"
            name="name"
            onChange={e => setData({...data, name: e.target.value})}
            component={renderTextField}
        /><br/>

        <Field
            id="cmt"
            label="Nhập bình luận"
            className="cmt"
            margin="normal"
            name="comment"
            onChange={e => setData({...data, comment: e.target.value})}
            component={renderTextAreaField}
        />

        {renderPermissionSelection()}
        <div className="control">
          <button onClick={() => dispatch(hideModal())} type="button" className="btn btn-light btn-sm"> HUỶ BỎ </button>
          <button disabled={invalid || submitting} type="submit" className="btn btn-primary btn-sm"> LƯU LẠI </button>
        </div>
      </div>
    </form>
  );
}

const FORM_NAME = "VOTE_MANAGEMENT";

FormVote = reduxForm({
  form: FORM_NAME,
  validate,
})(FormVote);

FormVote = connect((state) => ({
  initialValues: {
    name: state.logChat.chatEditting ? state.logChat.chatEditting.name : null,
    comment: state.logChat.chatEditting ? state.logChat.chatEditting.comment : null,
  },
}))(FormVote);

export default FormVote;
