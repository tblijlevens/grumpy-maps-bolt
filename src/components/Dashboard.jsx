import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAll } from '../utils/db';

function Dashboard() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      const chars = await getAll('characters');
      setCharacters(chars);
    };
    fetchCharacters();
  }, []);

  const handleCharacterClick = (character) => {
    navigate('/create-character', { state: { character } });
  };

  const handleLogout = () => {
    // TODO: Implement proper logout logic (clear session, etc.)
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/create-character">Create Character</Link></li>
          <li><Link to="/game-session">Join Game Session</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
      <h3>Your Characters</h3>
      <div className="character-list">
        {characters.map(char => (
          <div key={char.id} className="character-card" onClick={() => handleCharacterClick(char)}>
            <h4>{char.name}</h4>
            <p>Race: {char.race}</p>
            <p>Class: {char.class}</p>
            <p>HP: {char.hp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;