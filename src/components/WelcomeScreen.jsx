import React from 'react'
import "./WelcomeScreen.css"

const WelcomeScreen = ({onStartGame}) => {
  return (
    <div className='welcome-screen'>
        <h1>Welcome to Who Wants To Be A Millionaire!</h1>
        <button onClick={onStartGame}>Play!</button>
        <p>&copy; Advait Gogte</p>
    </div>
  )
}

export default WelcomeScreen