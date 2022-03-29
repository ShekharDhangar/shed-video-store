import { useState } from "react";

const useLocalStorageSetItem= (itemName,itemValue) => localStorage.setItem(itemName,itemValue);
const useLocalStorageGetItem= (itemName)=>localStorage.getItem(itemName);


const useInputHandler = (state) => {
  const [inputState, setInputState] = useState(state);
  const inputUpdate = (e) => {
    const inpValue = e.target.value;
    setInputState({
      ...inputState,
      [e.target.name]: inpValue,
    });
  };
  return { inputState, inputUpdate };
};


export {useLocalStorageSetItem,useLocalStorageGetItem,useInputHandler}