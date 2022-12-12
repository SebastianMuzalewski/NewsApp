/*
Reducers provided below. 
*/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// action creators start
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const reset = () => ({
  type: RESET,
});
// action creators finished

const initialState = {
  count: 0,
};
// initial state for the reducer will be set to 0

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default rootReducer;
// Reducer finished
