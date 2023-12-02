import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (text.trim() === '' || amount === 0) {
      setErrorMessage('Please fill in the inputs');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);

    // Clear the input fields and error message
    setText('');
    setAmount(0);
    setErrorMessage('');
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}