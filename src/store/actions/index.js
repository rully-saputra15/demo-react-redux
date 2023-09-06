import { ADD_MOVIES, DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionType";

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};

export const addMovies = (payload) => {
  return {
    type: ADD_MOVIES,
    payload: payload,
  };
};
