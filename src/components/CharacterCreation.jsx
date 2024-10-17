import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { add, update } from '../utils/db';

function CharacterCreation() {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    race: '',
    hp: 0,
  });
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.character) {
      setCharacter(location.state.character);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (character.id) {
        await update('characters', character);
        setFeedback('Character updated successfully!');
      } else {
        await add('characters', character);
        setFeedback('Character created successfully!');
      }
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Error saving character:', error);
      setFeedback('Failed to save character. Please try again.');
    }
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>{character.id ? 'Edit' : 'Create'} Your Character</h2>
      {feedback && <p className="feedback">{feedback}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={character.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            name="class"
            value={character.class}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="race">Race:</label>
          <input
            type="text"
            id="race"
            name="race"
            value={character.race}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="hp">HP:</label>
          <input
            type="number"
            id="hp"
            name="hp"
            value={character.hp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit">{character.id ? 'Update' : 'Create'} Character</button>
          <button type="button" onClick={handleBack}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default CharacterCreation;