import React from 'react';
import PropTypes from 'prop-types';

Offer.propTypes = {
    bonus: PropTypes.array,
};

Offer.defaultProps = {
    bonus: [],
};

function Offer(props) {
    const {bonus} = props;

    return (
        <div className="col-md-3">
            <div className="row justify-content-center mb-1">
                <button type="button" className="btn btn-default mr-2">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt="" />
                </button>
                <button type="button" className="btn btn-default ">
                <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" alt="" />
                </button>
            </div>
            <div className="card bg-light">
                <div className="card-header font-weight-bold p-1">Phụ kiện đi kèm</div>
                <div className="card-body m-1 pl-3 pr-3 p-0">
                    {
                        bonus.map((offer, key)=>(
                            <div key={offer.id}> 
                                {
                                    offer.accessories.map((test, key) =>
                                    <div className=" row p-2 p-0 justify-content-between" key={key}>
                                        <span>{test.name}</span>
                                        <span>x{test.numb}</span>
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Offer;