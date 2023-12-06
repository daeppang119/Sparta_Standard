import React, { useState } from "react";

function App() {
  const arrBtn = [
    "forEach",
    "filter",
    "map",
    "reduce",
    "push",
    "slice",
    "splice",
    "indexOf",
    "includes",
    "find",
    "some",
    "every",
    "sort",
    "join",
  ];
  const initalState = ["apple", "banana", "cherry", "date", "elderberry"];

  const [arr, setArr] = useState(initalState);
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleForEach = () => {
    let temp = "";
    arr.forEach((item, idx) => {
      temp += `${idx} ${item}, `;
    });
    setResult(temp);
  };

  const handleFilter = () => {
    const filtered = arr.filter((item) => {
      return item.includes(inputValue);
    });
    setResult(filtered.join(", "));
  };

  const handleToUpperCaseMap = () => {
    const mapped = arr.map((item, index) => {
      return item.toUpperCase();
    });
    console.log(mapped);
    setResult(mapped.join(", "));
  };

  const handleReduce = () => {
    const reduced = arr.reduce((acc, cur) => {
      `${acc} ${cur}`;
    });
    setResult(reduced);
  };

  return (
    <>
      <h1>Standard반 배열 API</h1>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <div>
        {/* {arrBtn.map((item) => {
            return <button>{item}</button>;
          })} */}
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleToUpperCaseMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
      </div>
      <div>
        <strong>Array: </strong> {arr.join(", ")}
      </div>
      <div>
        <strong>Result: </strong> {result}
      </div>
    </>
  );
}

export default App;
