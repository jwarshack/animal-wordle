import React from 'react'
import './Home.css'

function Home({setGameStart}) {
  return (
    <div className='home'>
      <div className='home__settings'>
        
      </div>
      <button className='home__startBtn' onClick={() => setGameStart(true)}>Start Game</button>

    </div>
  )
}

export default Home