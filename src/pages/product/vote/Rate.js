import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import FormVote from "./FormVote";
import VoteList from "./VoteList";
import { changeModalContent, changeModalTitle, hideModal, showModal } from "redux/actions/vote";
import { fetchListChat, setChatEditting, deleteChat } from "redux/actions/logchat";

function Rate(props) {
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

  const handleReplyVote = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Trả lời đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
    dispatch(setChatEditting(null));
  }

  const handleEditVote = (chat) =>{
    dispatch(setChatEditting(chat));
    dispatch(showModal());
    dispatch(changeModalTitle("Sửa đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
  } 

  const handleDeleteVote = (chat)=>{
    dispatch(deleteChat(chat.id));
  }

  const showModalDeleteVote = (chat)=>{
    dispatch(showModal());
    dispatch(changeModalTitle("Xoá đánh giá sản phẩm"));
    dispatch(changeModalContent(
      <div className="modalDelete">
        <div className="modalText">
          Bạn có chắc chắn muốn xóa đánh giá của:
          <span className="font-weight-bold text-danger ml-1">{chat.name}</span> không ?
        </div>

        <div className="row mt-3 m-0 justify-content-end">
          <div className="ml-1">
            <button onClick={() => dispatch(hideModal())} type="button" class="btn btn-light btn-sm">HUỶ BỎ</button>
          </div>

          <div className="ml-1">
            <button onClick={() => handleDeleteVote(chat)} type="button" class="btn btn-primary btn-sm">ĐỒNG Ý</button>
          </div>
        </div>
      </div>
    ));
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
        <VoteList editVote={handleEditVote} deleteVote={showModalDeleteVote} replyVote={handleReplyVote} />
      </div>
    </div>
  );
}

export default Rate;
