import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Egg",
      amount: 10,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Butter",
      amount: 10,
      category: "Groceries",
    },
  ]);
  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    />
  );
};

export default App;
