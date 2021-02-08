import { ADD_LIST } from "../types";

export const addList = (number) => {
  return {
    type: ADD_LIST,
    payload : number,
  };
};

