import { useState } from "react";

import "./App.css";
function App() {
  const [items, setItems] = useState([]); // Store the list of items
  const [input, setInput] = useState(""); // Store the user's input
  const addElement = () => {
    if (input !== "") {
      const newElement = [...items, input];
      setItems(newElement);
      // setInput("");
    }
  };
  const handleDelete = (index) => {
    const deleted = [...items];
    deleted.splice(index, 1);
    setItems(deleted);
  };
  return (
    <>
      <h2>item list </h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addElement}>Add Elemnt </button>
      <ul>
        {items.length === 0 ? (
          <p>no item</p>
        ) : (
          items.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
export default App;
