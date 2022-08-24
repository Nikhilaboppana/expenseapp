import { useState } from "react";
import { v4 } from "uuid";

const AddExpense = () => {
  //   return <h4>Form is coming soon...</h4>;

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const AmountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const DateChangeHandler = (event) => setEnteredDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    let newExpense = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      // Date: New(enteredDate),
    };
    console.log("Title : ", enteredTitle);
    console.log("Amount : ", enteredAmount);
    console.log("Date: ", enteredDate);
  };
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
            <h5 className="text-center">Add Expense Form</h5>
            <form onSubmit={submitHandler}>
              {/* title */}
              <label htmlFor="title">Title : </label>
              <input
                value={enteredTitle}
                onChange={titleChangeHandler}
                type="text"
                className="form-control"
                name="title"
                id="title"
              />
              <label htmlFor="amount">Amount: </label>
              <input
                value={enteredAmount}
                onChange={AmountChangeHandler}
                type="number"
                className="form-control"
                name="amount"
                id="amount"
              />
              <label htmlFor="Date">Date: </label>
              <input
                value={enteredDate}
                onChange={DateChangeHandler}
                type="date"
                className="form-control"
                name="Date"
                id="Date"
              />
              {/* amount */}
              {/* created-at */}
              {/* buttons */}
              <div className="d-grid">
                <button className="btn btn-dark" type="submit">
                  {" "}
                  Add Expense{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExpense;
