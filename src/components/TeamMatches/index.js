import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamObject: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(url)
    const data = await response.json()

    const camelCaseData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachObject => ({
        umpires: eachObject.umpires,
        result: eachObject.result,
        manOfTheMatch: eachObject.man_of_the_match,
        id: eachObject.id,
        date: eachObject.date,
        venue: eachObject.venue,
        competingTeam: eachObject.competing_team,
        competingTeamLogo: eachObject.competing_team_logo,
        firstInnings: eachObject.first_innings,
        secondInnings: eachObject.second_innings,
        matchStatus: eachObject.match_status,
      })),
    }

    this.setState({
      teamObject: camelCaseData,
      isLoading: false,
    })
  }

  getTeamMatches = () => {
    const {teamObject} = this.state

    const {teamBannerUrl, recentMatches, latestMatchDetails} = teamObject
    console.log(teamBannerUrl)
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      data,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchDetails

    return (
      <div className="team-matches-container">
        <div className="team-banner-card">
          <img
            className="team-banner-image"
            src={teamBannerUrl}
            alt="team banner"
          />
        </div>
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="list-of-match-cards">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="team-matches-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.getTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
