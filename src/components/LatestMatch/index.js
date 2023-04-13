import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-bg-container">
      <div className="first-card">
        <div className="match-details-card">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="harizental-rule" />
      <div className="innings-card">
        <h1 className="innigs-heading">First Innings</h1>
        <p className="innings-team">{firstInnings}</p>
        <h1 className="innigs-heading">Second Innings</h1>
        <p className="innings-team">{secondInnings}</p>
        <h1 className="innigs-heading">Man Of The Match Innings</h1>
        <p className="innings-team">{manOfTheMatch}</p>
        <h1 className="innigs-heading">Umpires</h1>
        <p className="innings-team">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
