import React from "react";
import ForgetButton from "../ForgetButton/ForgetButton";
import EntryButton from "../EntryButton/EntryButton";
import "./Buttons.styles.css";

function Buttons() {
  return (
    <div className="button__container">
      <ForgetButton></ForgetButton>
      <EntryButton></EntryButton>
    </div>
  );
}

export default Buttons;
