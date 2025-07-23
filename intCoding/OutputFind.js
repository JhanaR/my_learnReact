import { useState } from "react";

function OutputFind() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 5);
          setCounter(counter + 5);
          alert(counter);
          setCounter(counter + 5);
          setCounter(counter + 5);
        }}
      >
        Increment
      </button>

      {/* Needs to be alter as 
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter((prev) => prev + 5);
          setCounter((prev) => prev + 5);
          alert(counter);
          setCounter((prev) => prev + 5);
          setCounter((prev) => prev + 5);
        }}
      >
        Increment
      </button> */}

      {/* ANOTHER EXAMPLE
      <button onClick={() => {
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
        alert(counter);
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
      }}>Increment</button> */}

      {/* BEST PRACTICE FOR ABOVE METHOD */}
      {/* useEffect(() => {
  console.log("Counter updated:", counter);
}, [counter]); */}

    </>
  );
}

export default OutputFind;
