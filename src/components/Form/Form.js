import React from 'react'

const Form = props => {
  return (
    <form>
      <label>Categories</label>
      <select
        className="form-control"
        onChange={props.handleCategory}>
        <option>Gender</option>
        <option>Country</option>
        <option>Department</option>
      </select>
      <label>Search</label>
      <input
        className="form-control"
        type="text"
        name="input"
        id="input"
        onChange={props.handleInputChange}
        value={props.input}
      />
      <button
        type="button"
        className="btn btn-info"
        onClick={props.handleSubmit}
      >
      Submit
      </button>
    </form>
  )
}

export default Form
