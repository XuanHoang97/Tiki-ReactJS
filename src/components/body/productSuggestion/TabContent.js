import React from 'react';
import ListProduct from './ListProduct';

function TabContent(props) {
    return (
        <div className="tab-content">
        <div id="home" className="container tab-pane active"><br />
          <div className="list">
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
              <ListProduct />
          </div>

          <div className="view__more">
            <button type="button" className="btn btn-sm btn-outline-primary">Xem thêm</button>
          </div>
        </div>

        <div id="menu1" className="container tab-pane fade"><br />
          <h6>Menu 1</h6>
          <p>Giá rẻ nhất vịnh bắc bộ - ở đâu rẻ hơn em cho 5 củ</p>
        </div>

        <div id="menu2" className="container tab-pane fade"><br />
          <h6>Menu 2</h6>
          <p>Tươi không cần tưới - Tìm được củ nào héo em không nói gì</p>
        </div>

        <div id="menu3" className="container tab-pane fade"><br />
          <h6>Menu 3</h6>
          <p>Chốt deal nhanh chóng - nêú mà chậm chân thì vẫn hết hàng</p>
        </div>

        <div id="menu4" className="container tab-pane fade"><br />
          <img src="" alt="" />
          <p>Hàng mới ngon-bổ-rẻ, nhưng nhiều khi lẫn cả hàng cũ, hàng Fake em ko kiểm chứng được</p>
        </div>

        <div id="menu5" className="container tab-pane fade"><br />
          <img className="w-25" src="https://traderviet.com/attachments/lam-sao-toi-co-the-lam-giau-tu-forex-chi-voi-5000-ma-khong-co-kinh-nghiem-traderviet2-jpg.93523/" alt="" />
          <p>Mua gì cũng có - Chỉ sợ viêm màng túi</p>
        </div>

        <div id="menu6" className="container tab-pane fade"><br />
          <h6>Menu 6</h6>
          <p>Thời trang - Phong cách - Chất chơi người dơi</p>
        </div>

        <div id="menu7" className="container tab-pane fade"><br />
          <h6>Menu 7</h6>
          <p>Tiện ích đủ thứ - Toàn hàng Sang-Sịn-Mịn</p>
        </div>
      </div>
    );
}

export default TabContent;