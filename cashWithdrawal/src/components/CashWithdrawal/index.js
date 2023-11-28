// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  btnFunction = value => {
    const {Balance} = this.state
    console.log(value, 'clicked')
    const newBalance = Balance - value
    this.setState({Balance: newBalance})
  }

  render() {
    const {Balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="card">
          <div className="userDetails">
            <button type="button" className="icon">s</button>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balanceStatementContainer">
            <p className="balanceText">Your Balance</p>
            <p className="balanceNumber">{Balance}</p>
          </div>
          <p className="currency">In Rupees</p>
          <p className="text2">Withdraw</p>
          <p className="text3">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(each => (
              <DenominationItem
                details={each}
                btnFunction={this.btnFunction}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
