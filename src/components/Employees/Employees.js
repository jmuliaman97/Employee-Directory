import React from 'react'
import './Employees.css'

const Employees = props => {
  return (
    <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">{props.employee.full_name}</div>
      <div className="card-body">
        <p className="card-text">Email: {props.employee.email}</p>
        <p className="card-text">Gender: {props.employee.gender}</p>
        <p className="card-text">Country: {props.employee.country}</p>
        <p className="card-text">Department: {props.employee.department}</p>
      </div>
    </div>
  )
}

export default Employees
