// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="speed-para">Speed Is {speed}mph</h1>
        <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button acc"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button break"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
