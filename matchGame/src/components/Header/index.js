import './index.css'

const Header = props => {
  const {count, seconds} = props
  return (
    <nav className="nav-style">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="header-logo"
        />
      </div>
      <ul className="counter-item-cont">
        <li key="1" className="child-div">
          <p className="count-para">
            Score: <span className="span-style">{count}</span>
          </p>
        </li>
        <li key="2" className="child-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="span-style"> {`${seconds} sec`}</p>
        </li>
      </ul>
    </nav>
  )
}
export default Header
