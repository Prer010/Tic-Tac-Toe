import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  //States
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  //Handler functions
  function handleClick() {
    if (isEditing && onChangeName) {
      onChangeName(symbol, name);
    }
    setIsEditing((editing) => !editing);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
