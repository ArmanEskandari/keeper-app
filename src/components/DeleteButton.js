import React from "react";

function DeleteButton(props) {
  function handleClick() {
    props.onDelete(props.index);
  }
  return <button onClick={handleClick}>Delete</button>;
}

export default DeleteButton;
