// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubsribed: false}

  subsribeButton = () => {
    console.log('clicked')
    this.setState(prevState => ({
      isSubsribed: !prevState.isSubsribed,
    }))
  }

  render() {
    const {isSubsribed} = this.state
    let text
    if (isSubsribed) {
      text = 'Subscribed'
    } else {
      text = 'Subscribe'
    }
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p1 className="para">Thank you! Happy Learning</p1>
        <div className="button-container">
          <button className="btn" type="button" onClick={this.subsribeButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
