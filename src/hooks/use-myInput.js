import { useState } from "react";

const useMyInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const resetInput = () => {
      setEnteredValue('');
      setIsTouched(false);
  }

  return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      inputChangeHandler,
      inputBlurHandler,
      resetInput,      
  }
};

export default useMyInput;
