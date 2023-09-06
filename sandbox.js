import { legacy_createStore as createStore } from "redux";

const initialState = {
  counter: 0,
  users: [],
};

// reducers
// 1. pure function tidak boleh ada async dan tidak boleh ada async proses
// 2. tidak boleh unpredicted return (contoh return math.random)
// 3. pure function tidak boleh melakukan side effect ke variable yang bukan scopenya
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "counter/decremented":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented", payload: 5 });
store.dispatch({ type: "counter/decremented" });
