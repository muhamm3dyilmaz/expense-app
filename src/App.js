import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: 1, title: "HP Gaming Notebook", amount: 1250, date: new Date(2023, 4, 28)},
    {id: 2, title: "Logitech Keyboard", amount: 200, date: new Date(2023, 4, 29)},
    {id: 3, title: "Microsoft Mouse", amount: 50, date: new Date(2023, 4, 30)},
  ];
  return (
    <div >
      {/* flutterdaki widget mantığına benzer COMPONENT*/}
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}  date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount}  date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount}  date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
