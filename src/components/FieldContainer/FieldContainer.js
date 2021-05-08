import React from "react";
import Buttons from "../Buttons/Buttons";
import FieldLogin from "../FieldLogin/FieldLogin";
import "./FieldContainer.style.css"

function FieldContainer () {
    return (      <div className="field__container">
    <FieldLogin />
    <Buttons />
  </div>)
}

export default FieldContainer