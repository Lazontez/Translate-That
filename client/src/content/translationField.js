import React from 'react';
import inputCss from "../css/main/input.css"
import inputFieldCSS from "../css/main/inputField.css"
const axios = require("axios")



class TranslationField extends React.Component {

  state = {
    inputField: null,
    detectedLanguage: "not known",
    translatedText: null,
    convertTo: null
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ inputField: event.target.value }, this.makeTranslation(this.state.inputField));


  }
  makeTranslation = (word) => {
    if (word === null || word === undefined) {
      console.log("word inputed was defined as " + word)
    }
    else {
      const data = {
        convertTo: "es",
        text: word
      }
      axios.post("/api/translate", data)
        .then(res => {
          this.setState({
            detectedLanguage: res.data.Translation.detectedLanguage,
            translatedText: res.data.Translation.output
          }, console.log(this.state))
          console.log(res.data)
        })
    }

  }
  render() {
    const translatedTextCSS = {
      "-webkit-user-select": "none",
      "-moz-user-select": "none",
      "-ms-user-select": "none",
      "user-select": "none"
    }
    return (
      <div style={inputCss} className="TranslationField">
        <div className="container mainContent">
          <div>
            <div className="row translationFieldHeadBox">
              Your Detected Language is <div style={{ "color": "orange", "marginLeft": "2px" }}>  {" " + this.state.detectedLanguage}</div>
            </div>
          </div>
          <div className="row field" >
            <div className="col-xs-2 col-md-6 inputField" style={{ "marginRight": "0px" }}>
              <div class="form-group " style={inputFieldCSS}>
                <label ></label>
                <textarea onChange={this.handleInputChange} className="form-control" id="inputField" style={{ "fontSize": "25px", "color": "black", "border": "none", "height": "150px" }} autoComplete="off" title="Enter or Paste Text To Be Translated" rows="3"></textarea>
              </div>
            </div>
            <div className="col-xs-4 col-md-6 responseField" style={{ "marginRight": "0px", "background": "white" }}>
              <div className="col-xs-2 col-md-6 " style={{ "marginRight": "0px" }}>
              {this.state.translatedText}

              </div>
            </div>
          </div>
        </div>

      </div>

    )
  };
}


export default TranslationField;