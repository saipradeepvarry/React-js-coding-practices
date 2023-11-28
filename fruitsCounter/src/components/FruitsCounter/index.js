// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrementMango = () => {
    const {mango} = this.state
    console.log(mango)
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncrementBanana = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
    console.log(banana)
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span>{mango}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                type="button"
                className="mango-btn"
                onClick={this.onIncrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                type="button"
                className="banana-btn"
                onClick={this.onIncrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
