import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [type, setType] = useState("");

  useEffect(() => {
    // This will run every time `type` changes
    console.log("User typed:", type);
  }, [type]);

  const changeHandler = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <h1>Welcome {type || "Guest"}</h1>
      <input type="text" value={type} onChange={changeHandler} />
    </>
  );
}
