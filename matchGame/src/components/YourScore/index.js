import './index.css'

const YourScore = props => {
  const {count, onPlayAgain} = props

  const playGameAgain = () => {
    onPlayAgain()
  }

  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="yout-score">YOUR SCORE</p>
      <p className="score-count-para">{count}</p>
      <button onClick={playGameAgain} className="play-again-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default YourScore
