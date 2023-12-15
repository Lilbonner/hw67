import React from "react";
import './App.css'
import {createStore} from "@reduxjs/toolkit";

interface AccessMessageProps {
  message: string;
  color: string;
}

interface KeyboardProps {
  onButtonClick: (digit: string) => void;
  onClear: () => void;
  onEnter: () => void;
}

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


const AccessMessage: React.FC<AccessMessageProps> = ({ message, color }) => {
  return (
      <div style={{ color }}>
        <p>{message}</p>
      </div>
  );
};

const Keyboard: React.FC<KeyboardProps> = ({ onButtonClick, onClear, onEnter }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
      <div className="keyboard">
        {digits.map((digit) => (
            <button className="buttons" key={digit} onClick={() => onButtonClick(digit.toString())}>
              {digit}
            </button>
        ))}
        <button className="buttons" onClick={onClear}>{"<"}</button>
        <button className="buttons" onClick={onEnter}>E</button>
      </div>
  );
};


function App() {

  return (
    <>

    </>
  )
}

export default App
