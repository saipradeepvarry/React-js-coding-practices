// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, btnFunction} = props
  const {id, value} = details
  function buttonFunction() {
    btnFunction(value)
  }
  return (
    <li key={id}>
      <button className="btn" type="button" onClick={buttonFunction}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
