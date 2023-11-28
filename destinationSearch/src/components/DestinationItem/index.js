// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="destinationItemContainer">
      <img src={imgUrl} className="destinationImage" alt={name} />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem
