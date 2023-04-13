import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="team-card-bg-container">
      <Link className="team-card-link" to={`/team-matches/${id}`}>
        <div className="team-card">
          <div className="team-logo-card">
            <img className="team-logo" src={teamImageUrl} alt={name} />
          </div>
          <div className="team-details-card">
            <p className="team-name-heading">{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
