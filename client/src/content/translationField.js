import React from 'react';
import Input from "../components/input/input"
import inputCss from "../css/main/input.css"


function TranslationField() {
  return (
    <div style={inputCss} className="TranslationField">
      <div className="container mainContent">
        <div>
          <div className="row translationFieldHeadBox">
              Detected Language
          </div>
        </div>
        <div className="row field" >
          <div className="col-xs-2 col-md-6 inputField" style={{ "marginRight": "0px" }}>
          <Input></Input>

                   </div>
          <div className="col-xs-4 col-md-6 responseField" style={{ "marginRight": "0px", "background": "white" }}>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TranslationField;