import { legacy_createStore as createStore } from "redux";

// reducers
// 1. pure function tidak boleh ada async dan tidak boleh ada async proses
// 2. tidak boleh unpredicted return (contoh return math.random)
// 3. pure function tidak boleh melakukan side effect ke variable yang bukan scopenya
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + action.payload };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "counter/incremented", payload: 5 });
