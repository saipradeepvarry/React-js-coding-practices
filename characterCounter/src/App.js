import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here

const CharacterCounterList = props => {
  const {eachCharacter} = props
  const {totalCount, inputChar} = eachCharacter
  return (
    <li className="list-item">
      <p>
        {inputChar}: {totalCount}
      </p>
    </li>
  )
}

class App extends Component {
  state = {charCount: 0, userInput: '', inputList: [], isTextEntered: false}

  onUserInput = event => {
    const {target} = event
    const {value} = target
    this.setState(prevState => ({
      userInput: value,
      charCount: prevState.charCount + 1,
    }))
  }

  onCalculation = event => {
    event.preventDefault()
    const {charCount, userInput} = this.state
    const newCharList = {
      id: uuidv4(),
      totalCount: charCount,
      inputChar: userInput,
    }
    this.setState(prevState => ({
      inputList: [...prevState.inputList, newCharList],
      userInput: '',
      charCount: 0,
      isTextEntered: true,
    }))
  }

  onRenderFirstPage = () => {
    const {inputList, isTextEntered} = this.state
    return (
      <div className="first-page-bg">
        <div className="boss-cont">
          <h1>Count the characters like a Boss....</h1>
        </div>
        {isTextEntered ? (
          <ul>
            {inputList.map(eachCharacter => (
              <CharacterCounterList
                eachCharacter={eachCharacter}
                key={eachCharacter.id}
              />
            ))}
          </ul>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
            alt="no user inputs"
            className="no-user-image"
          />
        )}
      </div>
    )
  }

  onRenderSecondPage = () => {
    const {userInput} = this.state
    return (
      <form className="second-cont-bg" onSubmit={this.onCalculation}>
        <h1 className="second-page-head">Character Counter</h1>
        <div className="add-btn-cont">
          <input
            type="text"
            placeholder="Enter the Characters here"
            onChange={this.onUserInput}
            value={userInput}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }

  render() {
    const {userInput, charCount} = this.state
    console.log(userInput)
    console.log(charCount)
    return (
      <div className="main-cont">
        {this.onRenderFirstPage()}
        {this.onRenderSecondPage()}
      </div>
    )
  }
}

export default App