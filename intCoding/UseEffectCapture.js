import { useState, useEffect } from "react";

export default function UseEffectCapture() {
  const [type, setType] = useState("");

  // useEffect(() => {
  //   // This will run every time `type` changes
  //   console.log("User typed:", type);
  // }, [type]);

  // const changeHandler = (e) => {
  //   setType(e.target.value);
  // };

  return (
    <>
      <h1>Welcome {type || "Guest"}</h1>
      {/* <input type="text" value ={type} onChange={changeHandler}/> */}
      <input type="text" value ={type} onChange ={(e)=>setType(e.target.value)} />
      <input type="text" value={type ||"User Not Typing" }  readOnly/>
    </>
  );
}

