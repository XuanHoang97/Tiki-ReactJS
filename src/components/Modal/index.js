import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { hideModal } from 'redux/actions/vote';

function Modals() {
    const vote = useSelector(state => state.vote);
    const { component, title, showModal} = vote;
    const dispatch = useDispatch();
    
    return (
        <Modal show={showModal} onHide={hideModal} centered>
            <Modal.Header className="bg-success text-white p-2 pl-3">
                <Modal.Title>{title}</Modal.Title>
                <button type="button" className="close text-white" onClick={() => dispatch(hideModal())}> &times; </button>
            </Modal.Header>
            <Modal.Body>{component}</Modal.Body>
        </Modal>
    );
}

export default Modals;