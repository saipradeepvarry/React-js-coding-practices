// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {letters: 0}

  inputChange = event => {
    const sentence = event.target.value
    this.setState({letters: sentence.length})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="bg">
        <div className="cardContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="ipElement">
            Enter the phrase
          </label>

          <input
            id="ipElement"
            className="searchBar"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.inputChange}
          />
          <p className="result">No.of letters: {letters}</p>
        </div>

        <img
          className="bgImage"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
