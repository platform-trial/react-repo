import logo from './logo.svg';
import './App.css';

function App() {
  return (
	// <div>Hello, world!</div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>THIS IS AN EDIT TO THE PAGE</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </header>
    </div> 
  );
}

export default App;
