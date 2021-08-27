import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { hideModal } from "redux/actions/vote";

function FormVote({ handleSubmit, invalid, submitting }) {
  const dispatch = useDispatch();

  return (   
    <form >
      <div className="container vote" onClose={() => dispatch(hideModal())}>
        <div className="form-group">
          <input type="text" class="form-control" id="usr" placeholder="Nhập tên" />
        </div>
        <div class="form-group">
          <textarea class="form-control" rows="3" id="comment" placeholder="Nhập bình luận" ></textarea>
        </div>
      </div>

      <div className="control">
        <button onClick={() => dispatch(hideModal())} type="button" className="btn btn-light btn-sm"> HUỶ BỎ </button>
        <button disabled={invalid || submitting} type="submit" className="btn btn-primary btn-sm"> LƯU LẠI </button>
      </div>
    </form>
  );
}

export default FormVote;
