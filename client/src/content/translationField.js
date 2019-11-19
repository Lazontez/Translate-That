import React from 'react';
import Input from "../components/input/input"
import inputCss from "../css/main/input.css"


function TranslationField() {
  return (
    <div style={inputCss} className="TranslationField">
      <div className="container">
        <div>
          <div className="row">
            <span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-md-6 Input" style={{"marginRight":"0px" }}>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" style={{"fontSize":"25px" , "color":"black" ,"textEmphasis":"strong"}} autoComplete="off" title="EnterText" rows="3"></textarea>
            </div>          </div>
          <div className="col-xs-4 col-md-6 Input" style={{"marginRight":"0px" ,"background":"blue"}}>
            <Input></Input>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TranslationField;