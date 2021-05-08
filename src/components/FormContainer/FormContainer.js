import React from "react";
import Title from "../Title/Title";
import FieldContainer from "../FieldContainer/FieldContainer"
import "./FormContainer.style.css"

function FormContainer () {
    return (<div className="form__container">
    <Title />
    <FieldContainer />
  </div>)
} 

export default FormContainer