import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoanApplicationForm from './components/LoanApplicationForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/apply" element={<LoanApplicationForm />} />
        <Route path="*" element={<Dashboard />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
