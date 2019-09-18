import React, { Component } from 'react';

class Checkbox extends Component {
    constructor (props) {
        super(props);
        let _isChecked = "false";
        // Get the state of the checkbox
        _isChecked = localStorage.getItem("checkbox");
        console.log("Get checked from storage " + _isChecked)
        this.state = {
            isChecked: (_isChecked ==="false"),
        }
    }

  handleCheckboxChange = event =>
  {
    // Remember the state of the checkbox
    this.setState({ isChecked: event.target.checked })
    localStorage.setItem("checkbox", this.state.isChecked)
    console.log("Set checked to storage " + this.state.isChecked)
  }

  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
          />
        </label>
      </div>
    );
  }
}

export default Checkbox;