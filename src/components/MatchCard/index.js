import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    result,

    competingTeam,
    competingTeamLogo,

    matchStatus,
  } = matchDetails

  const winLostClassName = matchStatus === 'Lost' ? 'lose-text' : 'won-text'

  return (
    <li className="match-card">
      <img
        className="match-competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-competing-team-name">{competingTeam}</p>
      <p className="each-match-result">{result}</p>
      <p className={winLostClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
