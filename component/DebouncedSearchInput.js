import react, {useState, useEffect} from 'react';


function DebouncedSearchInput(){
const [type, setType] = useState('');//hold live user input value
const [debounType, setDebounType] = useState('')//holds the final debounced value that we treat as the “search trigger”.

// const handleChange = (e) => {
//  setType(e.target.value); 
// }
useEffect(()=>{
  const timer = setTimeout(() => {
    setDebounType(type);
  },500) //If the user pauses typing for 500ms, it sets the debouncedValue.


return () => clearTimeout(timer); // Cleanup function to clear the timer on unmount or re-render
}, [type]); // Effect runs when 'type' changes

useEffect(() => {
  if(debounType) {
  console.log("API call with debounced value:", debounType);
}
},[debounType])//triggers only when the final debouncedValue is set.

return(
  <>
  <h1>DebouncedSearchInput</h1>
  {/* <input type="text" name="text" value={type} onChange ={handleChange} /> */}
  <input type="text" name="text" value={type} onChange = {(e) => setType(e.target.value)} />
  </>
)
}
export default DebouncedSearchInput;
