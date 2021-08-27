import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { hideModal } from "redux/actions/vote";
import renderTextField from "components/FormHelper/TextField";
import renderTextAreaField from "components/FormHelper/TextField";
import validate from "./validate";
import { addChat, updateChat } from "../../../redux/actions/logchat";

function FormVote({ handleSubmit, invalid, submitting }) {
  const dispatch = useDispatch();

  const handleSubmitForm = (payload) => {
    const { info, cmt } = payload;
    dispatch(addChat(info, cmt));
  };

  return (   
    <form onSubmit={handleSubmit(handleSubmitForm)} >
      <div className="vote" onClose={() => dispatch(hideModal())}>
        <Field
            id="name"
            label="Nhập tên"
            className="name"
            margin="normal"
            name="info"
            component={renderTextField}
        /><br/>

        <Field
            id="cmt"
            label="Nhập bình luận"
            className="cmt"
            margin="normal"
            name="cmt"
            component={renderTextAreaField}
        />
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

export default FormVote;
