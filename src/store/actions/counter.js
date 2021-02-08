import { COUNTER_INCREASE, COUNTER_DECREASE } from "../types";

export const increase = () => {
  return {
    type: COUNTER_INCREASE,
  };
};

export const decrease = () => {
    return {
      type: COUNTER_DECREASE,
    };
  };
  