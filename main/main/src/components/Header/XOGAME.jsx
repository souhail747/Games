// src/components/XOGame.jsx
import  { useState, useEffect } from 'react';

const XOGame = () => {
  // Initialize state from localStorage or use default state
  const [gameState, setGameState] = useState(() => {
    const savedState = localStorage.getItem('xoGameState');
    return savedState ? JSON.parse(savedState) : { score: 0 }; // Replace with your default state
  });

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('xoGameState', JSON.stringify(gameState));
  }, [gameState]);

  // Function to update game state
  const updateGameState = (newState) => {
    setGameState(newState);
  };

  return (
   
  );
};

export default XOGame;
