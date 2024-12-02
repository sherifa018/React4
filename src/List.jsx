function List() {
  const fruits = [
    { id: 1, name: "apple", cal: 95 },
    { id: 2, name: "orange", cal: 45 },
    { id: 3, name: "banana", cal: 105 },
    { id: 4, name: "pinnaple", cal: 37 },
  ];
  const listItems = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.cal}</b>
      </li>
    );
  });

  return <ol>{listItems}</ol>;
}

export default List;
