import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <footer>
        <p>
          This code is{" "}
          <a href="https://github.com/alexisallison/react-attempt3.git">
            Open-Sourced
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
