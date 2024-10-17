import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import CharacterCreation from './components/CharacterCreation';
import GameSession from './components/GameSession';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>RPG Web App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-character" element={<CharacterCreation />} />
            <Route path="/game-session" element={<GameSession />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;