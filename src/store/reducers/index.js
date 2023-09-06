import { ADD_MOVIES, DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/actionType";

const initialState = {
  counter: 1,
  movies: [],
};

// reducers
// 1. pure function tidak boleh ada async dan tidak boleh ada async proses
// 2. tidak boleh unpredicted return (contoh return math.random)
// 3. pure function tidak boleh melakukan side effect ke variable yang bukan scopenya
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;
