import React from "react";
import "./EntryButton.styles.css";

function EntryButton(props) {
  return (
    <button className="button__entry">
      <span className="button__entry-text">{props.text}</span>
    </button>
  );
}

export default EntryButton;
