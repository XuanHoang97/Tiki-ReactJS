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
  console.log(chatEditting)
  const [data, setData] = useState({
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2cafAJXiEVaaJbi2DgN4KppO2XjlaAh1eQ&usqp=CAU',
    name:'',
    comment:''
  })

  const handleSubmitForm = useCallback(() => {
    const {name, comment, avatar} =data
    if(chatEditting && chatEditting.id){
      dispatch(updateChat(name, comment, avatar))
    }
    else{
      dispatch(addChat(name, comment))

    }
  },[data,dispatch]);

  const renderPermissionSelection = () => {
    let xhtml = null;
    if (chatEditting && chatEditting.id) {
      xhtml = (
        <>
          <Field
            id="avatar"
            label="Nhập đường dẫn URL ảnh"
            className="avatar"
            margin="normal"
            name="avatar"
            onChange={e => setData({...data, avatar: e.target.value})}
            component={renderTextField}
          />

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
        </>
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
    avatar: state.logChat.chatEditting ? state.logChat.chatEditting.avatar : null,
  },
}))(FormVote);

export default FormVote;
