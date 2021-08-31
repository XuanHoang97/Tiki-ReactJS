import React from 'react';
import { Link } from 'react-router-dom';
import SearchProduct from 'components/body/searchSpecial/SearchProduct';
import Filter from './Filter';
import Sort from './Sort';

function Result({props, search}) {
    return (
        <div className="Result__search bg-light pb-3">
            <ul className="breadcrumb mb-0">
                <li><Link to="/">Home</Link></li>
                <li>Phone</li>
            </ul>

            <div className="product bg-white">
                <Filter />

                <div className="list__product">
                    <div className="suggest__list">
                        <div>
                            <div >
                                <div className="Prod__Suggest"> <h5 className="m-0">Kết quả tìm kiếm cho `phone`: 5k+ kết quả</h5> </div>
                                <Sort />
                            </div>
                        </div>

                        <div className="tab-content">
                            <div id="home" className="container tab-pane active"><br />
                                <div className="list">
                                    <SearchProduct/>
                                    <SearchProduct/>
                                    <SearchProduct/>
                                    <SearchProduct/>
                                </div>
                            </div>

                            <div id="menu1" className="container tab-pane fade"><br />
                                <h6>Menu 1</h6>
                            </div>

                            <div id="menu2" className="container tab-pane fade"><br />
                                <h6>Menu 2</h6>
                            </div>

                            <div id="menu3" className="container tab-pane fade"><br />
                                <h6>Menu 3</h6>
                            </div>

                            <div id="menu4" className="container tab-pane fade"><br />
                                <h6>Menu 4</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;