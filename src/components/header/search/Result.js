import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { searchSpecialState$ } from "redux/selectors";
import * as actions from '../../../redux/actions'
import SearchProduct from 'components/body/searchSpecial/SearchProduct';
import Filter from './Filter';
import Sort from './Sort';

function Result({ props, search }) {
    const listProdSearch = useSelector(searchSpecialState$);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getDataSearchSpecial.getSearchSpecialRequest())
    }, [dispatch])

    let count = 1;

    return (
        <div className="Result__search bg-light pb-3">
            <ul className="breadcrumb mb-0">
                <li><Link to="/">Home</Link></li>
                <li>Book</li>
            </ul>

            <div className="product bg-white">
                <Filter />

                <div className="list__product">
                    <div className="suggest__list">
                        <div>
                            <div >
                                <div className="Prod__Suggest">
                                    <h5 className="m-0">Kết quả tìm kiếm cho
                                        `Hacker IELTS`: 5k+ kết quả</h5>
                                </div>
                                <Sort />
                            </div>
                        </div>

                        <div className="tab-content">
                            <div id="home" className="container tab-pane active"><br />
                                <div className="list">
                                    {
                                        listProdSearch.map((data, key) => {
                                            if (count <= 4) {
                                                count++;
                                                return (
                                                    <SearchProduct key={data._id} img1={data.img1} content={data.content} id={data.id} />
                                                );
                                            }
                                            else {
                                                return null;
                                            }
                                        })
                                    }
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