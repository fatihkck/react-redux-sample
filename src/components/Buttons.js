import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { increase, decrease } from "../store/actions/counter";
import { addList } from "../store/actions/list";

function Buttons() {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(addList(counter))}>Listeye Ekle</button>
    </div>
  );
}

export default Buttons;
