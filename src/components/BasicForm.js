import useMyInput from "../hooks/use-myInput";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    inputChangeHandler: firstNameChangeHandler,
    isValid: firstNameIsValid,
    resetInput: resetFirstName,
  } = useMyInput((v) => v.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    inputChangeHandler: lastNameChangeHandler,
    isValid: lastNameIsValid,
    resetInput: resetLastName,
  } = useMyInput((v) => v.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailOnChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useMyInput((v) => v.indexOf("@") > 0);
  
  let formIsValid = firstNameIsValid && lastNameIsValid && enteredEmailIsValid;
  const onFormSubmit = (e) => {
    e.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmailInput();
  };


  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={onFormSubmit}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <small className="error-text">
              <i>First Name is invalid</i>
            </small>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <small className="error-text">
              <i>Last Name is invalid</i>
            </small>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailOnChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <small className="error-text">
            <i>Email is invalid</i>
          </small>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
