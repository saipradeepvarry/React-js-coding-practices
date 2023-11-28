// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const newDestinationList = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput),
    )
    console.log(newDestinationList)
    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchElementContainer">
          <input
            type="search"
            placeholder="search"
            className="searchBar"
            onChange={this.onInputChange}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchIcon"
          />
        </div>
        <ul className="destinationsItemContainer">
          {newDestinationList.map(eachItem => (
            <DestinationItem
              key={eachItem.id}
              name={eachItem.name}
              imgUrl={eachItem.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
