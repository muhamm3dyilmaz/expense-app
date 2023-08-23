import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* Expenselere ait dateleri split edip farklı component olarak tanımladık */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;