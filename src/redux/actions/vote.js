import { CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL } from '../../contants/vote';

export const showModal = () => ({
    type: SHOW_MODAL
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

export const changeModalTitle = (title) => ({
    type: CHANGE_MODAL_TITLE,
    payload: {
        title
    }
});

export const changeModalContent = (component) => ({
    type: CHANGE_MODAL_CONTENT,
    payload: {
        component
    }
});