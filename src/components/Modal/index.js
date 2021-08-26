import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from 'redux/actions/vote';

function Modals() {
    const modal = useSelector(state => state.vote);
    const { component, title, showModal} = modal;
    const dispatch = useDispatch();
    
    return (
        <div open={showModal} onClose={hideModal}>
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{title}</h4>
                            <button type="button" className="close" onClick={() => dispatch(hideModal())}>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modals;