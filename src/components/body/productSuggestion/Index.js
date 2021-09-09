import React from 'react';
import TabContent from './TabContent';
import TabProduct from "./TabProduct"

function ProductSuggestion(props) {
  return (
    <div className="suggest__list">
      <div style={{ position: 'sticky', top: '0' }}>
        <div >
          <div className="Prod__Suggest"> <h5 className="m-0">Gợi Ý Hôm Nay</h5> </div>
          <TabProduct />
        </div>
      </div>

      <TabContent  />
    </div>
  );
}

export default ProductSuggestion;