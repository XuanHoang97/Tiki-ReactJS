import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormVote from "./FormVote";
import LogChat from "./LogChat";
import { changeModalContent, changeModalTitle, hideModal, showModal,} from "redux/actions/vote";
import { fetchListChat } from "redux/actions/logchat";

function Rate(props) {
  const listChat = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListChat());
  }, []);

  const handleClickOpen = () => {
    dispatch(showModal());
    dispatch(changeModalTitle("Thêm đánh giá sản phẩm"));
    dispatch(changeModalContent(<FormVote />));
  };

  return (
    <div className="container bg-white p-3 pl-2 mt-4">
      <div className="row">
        <div className="d-flex align-items-center ml-3">
          <i class="far fa-comment-dots mr-2 text-warning"></i>
          <h5 className="text-success">ĐÁNH GIÁ và BÌNH LUẬN </h5>
          <div className="chat ml-5">
            <button onClick={handleClickOpen} type="button" class="btn btn-primary btn-sm">
              <i class="fas fa-plus mr-2"></i>Thêm đánh giá sản phẩm
            </button>
          </div>
        </div>
        <LogChat/>
      </div>
    </div>
  );
}

export default Rate;
