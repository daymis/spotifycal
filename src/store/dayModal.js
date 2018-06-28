const showModal = {
  isOpen: false,
  date: ''
};

//ACTION TYPES
const TRIGGER_MODAL = 'TRIGGER_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

//ACTION CREATORS
export const triggerModal = (date, events) => ({ type: TRIGGER_MODAL, date, events });

export const closeModal = () => ({ type: CLOSE_MODAL });

//REDUCER
export default (state = showModal, action) => {
  switch (action.type) {
    case TRIGGER_MODAL:
      return { ...state, isOpen: true, date: action.date };
    case CLOSE_MODAL:
      return Object.assign({}, state, { isOpen: false });
    default:
      return state;
  }
}