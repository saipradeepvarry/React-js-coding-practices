// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {data} = props
  const {id, name, teamImageUrl} = data
  console.log(name)
  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
