import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import PixKeysPage from './pages/pixKeys';
import TransferPixPage from './pages/transferPix';
import EntriesPage from './pages/entries';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomeLoggedPage from './pages/homeLogged';
import MovementsPage from './pages/movements';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/homeLogged' element={<HomeLoggedPage />} />
        <Route
          path='/entries'
          element={
            <PrivateRoute>
              <EntriesPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/movements'
          element={
            <PrivateRoute>
              <MovementsPage />
            </PrivateRoute>
          }
        />
        <Route path='/signup' element={<SignupPage />} />
        <Route
          path='/pixKeys'
          element={
            <PrivateRoute>
              <PixKeysPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/transferPix'
          element={
            <PrivateRoute>
              <TransferPixPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
