import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions'

import TabContent from './TabContent';
import TabProduct from "./TabProduct"

function ProductSuggestion() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getDataProductSuggest.getSuggestRequest())
  }, [dispatch])

  // const [currentTab, setCurrentTab] = useState('tab1');
  // const tabList = [
  //   {
  //     name: 'tab1',
  //     label: 'Dành cho bạn',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png.webp",
  //     content: (
  //       <div className="tab-content p-3">
  //         <h5>Dành cho bạn</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab2',
  //     label: 'Đi chợ siêu sale',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp",
  //     content: (
  //       <div className="tab-content p-3">
  //         <h5>Đi chợ siêu sale</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab3',
  //     label: 'Dành cho bạn',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Dành cho bạn</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab4',
  //     label: 'Đi chợ siêu sale',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Đi chợ siêu sale</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab5',
  //     label: 'Dành cho bạn',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Dành cho bạn</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab6',
  //     label: 'Đi chợ siêu sale',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Đi chợ siêu sale</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab7',
  //     label: 'Dành cho bạn',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/upload/6d/56/64/3c4a8a3a7475311d8c6892d9ede8ead7.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Dành cho bạn</h5>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'tab8',
  //     label: 'Đi chợ siêu sale',
  //     img: "https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp",
  //     content: (
  //       <div className="tab-content">
  //         <h5>Đi chợ siêu sale</h5>
  //       </div>
  //     )
  //   }
  // ];

  return (
    // <div className="suggest__list">
    /* <div className="tab__product">
      {
        prodSuggest && prodSuggest.map((tab, key) => (
          <button 
            key={tab.id}
            onClick={() => setCurrentTab(tab.name)} 
            className={(tab.name === currentTab) ? 'item__suggest active' : 'item__suggest'}
            >
              <img src={tab.img} alt="error" style={{width: '42px', height: '42px'}}/>
              <span>{tab.label}</span>
          </button>
        ))
      }
    </div> */

    /* {
      prodSuggest && prodSuggest.map((tab, key) => {
        if(tab.name === currentTab) {
          return <div key={key.id}>{tab.label}</div>;
        } else {
          return null;
        }
      })
    } */
    // </div>

    <div className="suggest__list">
      <div style={{ position: 'sticky', top: '0' }}>
        <div >
          <div className="Prod__Suggest"> <h5 className="m-0">Gợi Ý Hôm Nay</h5> </div>
          <TabProduct />
        </div>
      </div>

      <TabContent />
    </div>

  );
}

export default ProductSuggestion;