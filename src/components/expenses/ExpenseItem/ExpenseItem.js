import ExpenseDate from "../ExpenseDate/ExpenseDate";
const ExpenseItem = (props) => {
  return (
    // <div className="row">
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title text-center">
            {props.expense.title.toUpperCase()}
          </h4>
          <div className="card-text">
            <p> Amount: ${props.expense.amount}</p>
            <p>
              Created At: <ExpenseDate createdAt={props.expense.createdAt} />
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default ExpenseItem;
