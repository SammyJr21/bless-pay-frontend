import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PixKeysPage from './pages/pixKeys';
import TransferPixPage from './pages/transferPix';
import EntriesPage from './pages/entries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/entries' element={<EntriesPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/pixKeys' element={<PixKeysPage />} />
        <Route path='/transferPix' element={<TransferPixPage />} />
      </Routes>
    </Router>
  );
}

export default App;
