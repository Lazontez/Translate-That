import React from 'react';
import Input from "../components/input/input"

function TranslationField() {
  return (
    <div className="TranslationField">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <Input></Input>
          </div>
          <div className="col-sm-5">
            <Input></Input>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TranslationField;