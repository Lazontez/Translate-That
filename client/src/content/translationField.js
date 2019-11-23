import React from 'react';
import inputCss from "../css/main/input.css"
import inputFieldCSS from "../css/main/inputField.css"



class TranslationField extends React.Component {

  state = {
    inputField: null
  }

  handleInoutChange = (event) => {
    event.preventDefault();
    this.setState({ inputField: event.target.value }, console.log(inputField))

  }
  render() {
    return (
      <div style={inputCss} className="TranslationField">
        <div className="container mainContent">
          <div>
            <div className="row translationFieldHeadBox">
              DETECTED LANGUAGE
          </div>
          </div>
          <div className="row field" >
            <div className="col-xs-2 col-md-6 inputField" style={{ "marginRight": "0px" }}>
              <div class="form-group" style={inputFieldCSS}>
                <label ></label>
                <textarea onChange={this.handleInoutChange} class="form-control" id="inputField" style={{ "fontSize": "25px", "color": "black", "border": "none" }} autoComplete="off" title="Enter or Paste Text To Be Translated" rows="3"></textarea>
              </div>
            </div>
            <div className="col-xs-4 col-md-6 responseField" style={{ "marginRight": "0px", "background": "white" }}>
            </div>
          </div>
        </div>

      </div>

    )
  };
}


export default TranslationField;