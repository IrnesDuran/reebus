import { uiActionTypes } from './ui.types';

export const showModal = () => ({
  type: uiActionTypes.SHOW_MODAL,
});

export const hideModal = () => ({
  type: uiActionTypes.HIDE_MODAL,
});
