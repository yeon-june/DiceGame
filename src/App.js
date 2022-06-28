import { useState } from 'react'
import Button from './Button'
import Board from './Board'
import logoImg from './assets/logo.png'
import './App.css'

const random = (n) => {
  return Math.ceil(Math.random() * n)
}

const App = () => {
  const [myHistory, setMyHistory] = useState([])
  const [otherHistory, setOtherHistory] = useState([])

  const handleRollClick = () => {
    const newMyNum = random(6)
    const newOtherNum = random(6)
    setMyHistory([...myHistory, newMyNum])
    setOtherHistory([...otherHistory, newOtherNum])
  }

  const handleClearClick = () => {
    setMyHistory([])
    setOtherHistory([])
  }

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logoImg} alt="주사위 로고"/>
        <h2 className="App-title">주사위 게임</h2>
      </div>
      <div>
        <Button className="App-button" color="blue" onClick = {handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick = {handleClearClick}>처음부터</Button>
      </div>
      <div className="App-boards">
        <Board className="App-board" name="나" color="blue" gameHistory={myHistory}/>
        <Board className="App-board" name="상대" color="red" gameHistory={otherHistory}/>
      </div>
    </div>
  )
} 

// 타 파일에서 import를 위해 필요
export default App