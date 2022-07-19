import React, { useState, useEffect } from "react";

function Counter({ tabla }) {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/${tabla}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
        setCounter(data.total);
      })
      .catch((err) => console.log(err));
  }, []);

  return <h2>{counter}</h2>;
}

export default Counter;
