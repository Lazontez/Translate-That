import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div class="form-group">
        <label for="exampleFormControlTextarea1"></label>
        <textarea class="form-control" id="exampleFormControlTextarea1" style={{ "fontSize": "25px", "color": "black", "border": "none" }} autoComplete="off" placeholder="Enter Text Here" title="EnterText" rows="3"></textarea>
      </div>

    )
  }
  ;
}

export default Input;