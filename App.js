import logo from "./logo.svg";
import "./App.css";
// import Productsearch from "./intCoding/Product Search";
import DebouncedSearchInput from './component/DebouncedSearchInput';

function App() {
  return (
    <div className="App">
      <DebouncedSearchInput/>
      {/* <Productsearch/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
