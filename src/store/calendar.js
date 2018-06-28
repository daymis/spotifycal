const initial = {
  dateSelected: ''
};

//ACTION TYPE
const SELECTED_DATE = 'SELECTED_DATE';

//ACTION CREATOR
export const selectedDate = date => ({ type: SELECTED_DATE, date });

//THUNK CREATOR
export const selectDate = () => ({ type: SELECTED_DATE });

//REDUCER
export default (state = initial, action) => {
  switch (action.type) {
    case SELECTED_DATE:
      return { ...state, dateSelected: action.date }
    default:
      return state;
  }
}