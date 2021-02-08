import { COUNTER_INCREASE, COUNTER_DECREASE } from "../types";

const default_state = 0;

const reducer = (state = default_state, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      state += 1;
      return state;
    case COUNTER_DECREASE:
      state -= 1;
      return state;
    default:
      return state;
  }
};

export default reducer;
