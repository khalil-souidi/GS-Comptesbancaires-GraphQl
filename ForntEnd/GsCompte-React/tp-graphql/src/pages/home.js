import React, { useState } from 'react';
import AddCompte from '../components/addcompte';
import CompteList from '../components/comptelist';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';
import '../App.css';

const Home = () => {
  const [selectedCompteId, setSelectedCompteId] = useState(null);

  return (
    <div className="home">
      <h1>Account Management</h1>
      <AddCompte />
      <CompteList onSelectCompte={(id) => setSelectedCompteId(id)} />
      {selectedCompteId && (
        <>
          <h2>Transactions for Account ID: {selectedCompteId}</h2>
          <AddTransaction compteId={selectedCompteId} />
          <TransactionList compteId={selectedCompteId} />
        </>
      )}
    </div>
  );
};

export default Home;
