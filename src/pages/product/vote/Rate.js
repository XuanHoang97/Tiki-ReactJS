import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormVote from "./FormVote";
import VoteList from "./VoteList";
import { changeModalContent, changeModalTitle, changeBgCreate, hideModal, showModal, } from "redux/actions/vote";
import { fetchListChat, setChatEditting } from "redux/actions/logchat";

function Rate(props) {
  const listChat = useSelector((state) => state.logChat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListChat());
  }, []);

  const handleClickOpen = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Thêm đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
    dispatch(setChatEditting(null));
  };

  const handleEditVote = (chat) =>{
    dispatch(setChatEditting(chat));
    dispatch(showModal());
    dispatch(changeModalTitle("Sửa đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
  } 
  
  return (
    <div className="container bg-white p-3 pl-2 mt-4">
      <div className="row">
        <div className="row align-items-center ml-3">
          <i class="far fa-comments text-warning mr-2"></i>
          <h5 className="text-success">ĐÁNH GIÁ và BÌNH LUẬN </h5>
          <div className="chat ml-4">
            <button onClick={handleClickOpen} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
              <i className="fas fa-plus mr-2"></i>Thêm đánh giá sản phẩm
            </button>
          </div>
        </div>
        <VoteList editVote={handleEditVote} />
      </div>
    </div>
  );
}

export default Rate;
