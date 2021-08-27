import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormVote from "./FormVote";
import LogChat from "./LogChat";
import { changeModalContent, changeModalTitle, hideModal, showModal, } from "redux/actions/vote";
import { fetchListChat } from "redux/actions/logchat";

function Rate(props) {
  const listChat = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Thêm đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
  };

  return (
    <div className="container bg-white p-3 pl-2 mt-4">
      <div className="row">
        <div className="row align-items-center ml-3">
          <h5>ĐÁNH GIÁ và BÌNH LUẬN </h5>
          <div className="chat ml-4">
            <button onClick={handleClickOpen} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
              <i className="fas fa-plus mr-2"></i>Thêm đánh giá sản phẩm
            </button>
          </div>
        </div>
        <LogChat />
      </div>
    </div>
  );
}

export default Rate;
