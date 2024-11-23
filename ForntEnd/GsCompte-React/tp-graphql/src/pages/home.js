import React, { useState } from 'react';
import AddCompte from '../components/addcompte';
import CompteList from '../components/comptelist';
import AddTransaction from '../components/AddTransaction';
import TransactionList from '../components/TransactionList';
import '../App.css';

const Home = () => {
  const [selectedCompteId, setSelectedCompteId] = useState(null);
  const [currentSolde, setCurrentSolde] = useState(0);

  const handleSelectCompte = (id, solde) => {
    setSelectedCompteId(id);
    setCurrentSolde(solde);
  };

  return (
    <div className="home">
      {/* Left Section */}
      <div className="left-section">
        <h1>Gestion Comptes Bancaires</h1>
        <AddCompte />
        <CompteList onSelectCompte={handleSelectCompte} />
      </div>

      {/* Right Section */}
      <div className="right-section">
        {selectedCompteId && (
          <>
            <h2>Transactions for Account ID: {selectedCompteId}</h2>
            <p><strong>Current Balance:</strong> {currentSolde} €</p>
            <AddTransaction
              compteId={selectedCompteId}
              currentSolde={currentSolde}
              setCurrentSolde={setCurrentSolde}
            />
            <TransactionList compteId={selectedCompteId} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
