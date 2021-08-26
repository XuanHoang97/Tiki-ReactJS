import React from "react";

function FormVote(props) {
  return (
    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Thêm đánh giá sản phẩm</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <form>
            <div className="modal-body">
              <div className="form-group">
                <input type="text" class="form-control" id="usr" placeholder="Nhập tên" />
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="3" id="comment" placeholder="Nhập bình luận" ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-light btn-sm" data-dismiss="modal" > HUỶ BỎ </button>
              <button type="button" className="btn btn-primary btn-sm" data-dismiss="modal" > LƯU LẠI </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormVote;
