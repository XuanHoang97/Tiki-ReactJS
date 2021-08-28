import { CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL, CHANGE_BG_CREATE, CHANGE_BG_EDIT, CHANGE_BG_DELETE } from '../../contants/vote';

export const showModal = () => ({
    type: SHOW_MODAL
});

export const hideModal = () => ({
    type: HIDE_MODAL
});

export const changeBgCreate = () => ({
    type: CHANGE_BG_CREATE
});

export const changeBgEdit = () => ({
    type: CHANGE_BG_EDIT
});

export const changeBgDelete = () => ({
    type: CHANGE_BG_DELETE
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