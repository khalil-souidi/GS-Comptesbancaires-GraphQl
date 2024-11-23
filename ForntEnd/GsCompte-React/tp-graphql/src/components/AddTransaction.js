import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRANSACTION, GET_TRANSACTIONS_BY_COMPTE } from '../apollo/queries';
import '../styles/AddTransaction.css';

const AddTransaction = ({ compteId }) => {
  const [montant, setMontant] = useState('');
  const [type, setType] = useState('');

  const [addTransaction] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [{ query: GET_TRANSACTIONS_BY_COMPTE, variables: { id: compteId } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ variables: { montant: parseFloat(montant), type, compteId } });
    setMontant('');
    setType('');
  };

  return (
    <form className="add-transaction-form" onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="number"
        placeholder="Amount"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="" disabled>Select Transaction Type</option>
        <option value="DEPOT">Deposit</option>
        <option value="RETRAIT">Withdrawal</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
