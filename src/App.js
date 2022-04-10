import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [gameStart, setGameStart] = useState(false)


  const [letterCount, setLetterCount] = useState(4)
  return (
    <div className="app">
      {!gameStart ? <Home setGameStart={setGameStart} setLetterCount={setLetterCount}/> : <Game letterCount={letterCount}/>}
    </div>
  );
}

export default App;
