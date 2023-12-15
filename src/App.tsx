import React from "react";
import './App.css'
import {createStore} from "@reduxjs/toolkit";


const SetPin = 'SetPin';
const setPin = (digit: string) => {
  return { type: SetPin, payload: digit };
};

const ClearPin = 'ClearPin';

const clearPin = () => {
  return { type: ClearPin };
};

const pinReducer = (state = '', action: any) => {
  if (action.type === SetPin) {
    return state.length < 4 ? state + action.payload : state;
  } else if (action.type === ClearPin) {
    return '';
  } else {
    return state;
  }
};

const store = createStore(pinReducer);

function App() {

  return (
    <>

    </>
  )
}

export default App
