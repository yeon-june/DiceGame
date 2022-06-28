import Dice from './Dice'
import './Board.css'

const Board = ({name, color, gameHistory, className}) => {
  const num = gameHistory[gameHistory.length -1] || 1
  const sum = gameHistory.reduce((acc,el) => acc+el,0)
  const boardClassNames = `Board ${className}`
  return (
    <div className={boardClassNames}>
      <h2 className="Board-heading ">{name}</h2>
      <Dice color={color} num={num}/>
      <h2 className="Board-heading ">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading ">기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
  )
} 

// 타 파일에서 import를 위해 필요
export default Board