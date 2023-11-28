// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  getFeedback = () => {}

  onClickFunct = () => {
    this.setState({clicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {clicked} = this.state

    return (
      <div className="bg">
        <div className="card">
          {!clicked && (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojiList">
                {emojis.map(each => (
                  <li key={each.id} className="listItem">
                    <button
                      className="button"
                      onClick={this.onClickFunct}
                      type="button"
                    >
                      <img
                        className="img"
                        src={each.imageUrl}
                        alt={each.name}
                      />
                      <p className="para">{each.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {clicked && (
            <div className="responseContainer">
              <img src={loveEmojiUrl} className="sizing" alt="love emoji" />
              <h1 className="heading">Thank You</h1>
              <p>
                We will use your feedback to improve our customer service
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
