import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
const statusConts = {
  success: 'success',
  failure: 'failure',
}

class CowinDashboard extends Component {
  state = {isLoading: true, covidData: {}, status: 'failure'}

  componentDidMount() {
    this.getCovidDetails()
  }

  getCovidDetails = async () => {
    const response = await fetch(vaccinationDataApiUrl)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        isLoading: false,
        covidData: updatedData,
        status: 'success',
      })
    } else {
      this.setState({status: 'failure', isLoading: false, covidData: {}})
    }
  }

  renderSuccessView = () => {
    const {covidData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = covidData

    const displayData = (
      <div className="display-chart-cont">
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender gender={vaccinationByGender} />
        <VaccinationByAge age={vaccinationByAge} />
      </div>
    )
    return displayData
  }

  renderFailureView = () => {
    const displayFailure = (
      <div className="failure-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
          className="failure-img"
        />
        <h1 className="failure-head">Something Went Wrong</h1>
      </div>
    )
    return displayFailure
  }

  renderDisplayView = () => {
    const {status} = this.state
    switch (status) {
      case statusConts.success:
        return this.renderSuccessView()
      case statusConts.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state
    const app = (
      <div className="home-cont">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <h1 className="title">Co-WIN</h1>
        </div>
        <h1 className="title-head">CoWIN Vaccination in India</h1>
        {isLoading ? (
          <div data-testid="loader" className="loader-tester">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderDisplayView()
        )}
      </div>
    )
    return app
  }
}

export default CowinDashboard
