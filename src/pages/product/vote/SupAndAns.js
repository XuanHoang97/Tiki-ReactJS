import React from "react";
import FormVote from "./FormVote";

function SupAndAns(props) {
  return (
    <div className="container bg-white p-3 pl-2 mt-4">
      <div className="row">
        <div className="row align-items-center ml-3">
          <h5>ĐÁNH GIÁ và BÌNH LUẬN </h5>
          <div className="chat ml-4">
            <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">
              <i class="fas fa-plus mr-2"></i>Thêm đánh giá sản phẩm
            </button>
            <FormVote />
          </div>
        </div>

        <div className="users col-md-12 mt-4">
          <div className="user d-flex">
            <div style={{ width: 50, height: 50}} >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5LV5FEwLk2UGd5-UApCpu7yuOMV7cAKDFKTofRzlzxdT3wKd3pAPBc_KzhnWFuhowFI&usqp=CAU" alt="" style={{borderRadius:'50%'}} />
            </div>

            <div className="ml-2">
              <div className="title d-flex align-items-baseline">
                <h6 className="text-capitalize mb-0">Văn Đắc</h6>
                <span className="ml-2 text-muted small">1 ngày trước</span>
              </div>

              <div className="content">Sản phẩm sang-sịn-mịn quá ạ :) </div>
              <div className="option d-flex mt-2" style={{ gap: 10, fontSize: 13 }} >
                <div className="text-success" style={{ cursor: "pointer" }}> Trả lời </div>
                <div className="text-warning" style={{ cursor: "pointer" }}> Sửa </div>
                <div className="text-danger" style={{ cursor: "pointer" }}> Xóa </div>
              </div>
            </div>
          </div>

          <div className="reply ml-5 mt-3 pl-3" style={{ borderLeft: "5px solid green" }}>
            <div className="ml-2">
              <div className="title d-flex align-items-baseline">
                <h6 className="text-capitalize mb-0">Xuân Hoàng</h6>
                <span className="ml-2 text-muted small">1 ngày trước</span>
              </div>
              <div className="content">Tks you :)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupAndAns;
