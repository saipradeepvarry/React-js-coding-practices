// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'
import './index.css'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    // console.log(data)
    // console.log(teams)

    const formattedTeams = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamData: formattedTeams, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="bg">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="team-cards-container">
            {teamData.map(each => (
              <TeamCard key={each.id} data={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
//
