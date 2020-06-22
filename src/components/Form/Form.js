import React from 'react'

const Form = props => {
  return (
    <form>
      <div className="form-group">
        <label>Categories</label>
        <select
            className="form-control"
            onChange={props.handleCategory}>
          <option>Gender</option>
          <option>Country</option>
          <option>Department</option>
        </select>
        <label htmlFor="input">Search</label>
        <input
            className="form-control"
            type="text"
            name="input"
            id="name"
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
      </div>
    </form>
  )
}

export default Form