import React from "react";

const ListItem = ({ item, index, handleRemove }) => {
  return (
    <div className="list-item">
      <p>{item}</p>
      <span>index = {index}</span>
      <button onClick={() => handleRemove(index)}>Remove</button>
    </div>
  );
};

export default ListItem;
