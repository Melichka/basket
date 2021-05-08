import React, { useState } from "react";
import "./EntryButton.styles.css";

function EntryButton(props) {
  const [isOpen, setIsOpen] = useState(true);

  function onButtonClick() {
    setIsOpen(!isOpen);
  }

  return (
    <button onClick={onButtonClick} className="button__entry">
      {isOpen && <span className="button__entry-text">{props.before}</span>}
      {!isOpen && <span className="button__entry-text">{props.after}</span>}
    </button>
  );
}

export default EntryButton;
