import logo from './logo.svg';
import './App.css';

function App() {

  fetch("https://enigmatic-caverns-73094.herokuapp.com/https://id.twitch.tv/oauth2/authorize?" + new URLSearchParams({
    client_id: "9lp8xp13e0f7urvj7vyh79j433a58e",
    response_type: "token",
    redirect_uri: "http://localhost:3000/"
  }))
  .then(res => res.json())
  .then(res => console.log(res))
  

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
