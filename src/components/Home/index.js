import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await response.json()

    const camelCaseTeams = teams.map(eachObject => ({
      name: eachObject.name,
      id: eachObject.id,
      teamImageUrl: eachObject.team_image_url,
    }))

    this.setState({
      teamsList: camelCaseTeams,
      isLoading: false,
    })
  }

  getIplDashboard = () => {
    const {teamsList} = this.state

    return (
      <div className="ipl-dashboard">
        <div className="logo-cord">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-dash-board-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          <ul className="teams-list-container">
            {teamsList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.getIplDashboard()
        )}
      </div>
    )
  }
}

export default Home
