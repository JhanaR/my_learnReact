 /* import { useState } from "react";

function Parent() {
    const [value, setValue] = useState(0);
  
    return (
      <>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
        <Child />
      </>
    );
  }
  
  function Child() {
    console.log("Child rendered");
    return <div>Child component is mapped</div>;
  }

*/
  
  import { useState } from "react";
  import React from "react";
 
  function Parent() {
    const [value, setValue] = useState(0);
  
    return (
      <>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
        <h1>{value}</h1>
        <MemChild />
      </>
    );
  }
  
  const MemChild = React.memo(function Child() {
    console.log("Child rendered");
    return <div>Child component is mapped</div>;
  })
    
  export default Parent; 