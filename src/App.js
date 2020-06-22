import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Employees from './components/Employees'
import db from './db/db.json'

class App extends Component {

  state = {
    input: '',
    search: '',
    category: '',
    selected: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCategory = event => {
    this.setState({ category: event.target.value.toLowerCase() })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      input: '',
      search: this.state.input,
      category: '',
      selected: this.state.category
    })
  }

  renderEmployees(category) {
    if (this.state.search !== '') {
      return db.map(employee => {
        switch (category) {
          case 'gender':
            if (employee.gender === this.state.search) {
              return <Employees employee={employee} />
            }
            break
          case 'country':
            if (employee.country === this.state.search) {
              return <Employees employee={employee} />
            }
            break
          case 'department':
            if (employee.department === this.state.search) {
              return <Employees employee={employee} />
            }
            break
        }
      })
    } else {
      return db.map(employee => <Employees employee={employee} />)
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Form 
                input={this.state.input}
                handleCategory={this.handleCategory}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
          <div className="row">
            {this.renderEmployees(this.state.selected)}
          </div>
        </div>
      </>
    )
  }
}

export default App
