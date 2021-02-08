import React from "react";
import {Provider} from 'react-redux';
import store from './store';
import { Counter, Buttons } from "./components";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <Buttons></Buttons>
    </Provider>
  );
}

export default App;
