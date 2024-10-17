import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the RPG Web App</h2>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/create-account">Create Account</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;