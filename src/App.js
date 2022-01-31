// import logo from './logo.svg';
import './App.css';
import truckPic from './straight-job-truck.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={truckPic}  />
        <p>
          Providing best delivery service 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          DA Trucking Express
        </a>
      </header>
    </div>
  );
}

export default App;
