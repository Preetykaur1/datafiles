import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Weather App</h1>
      </header>
      <main>
        <Forecast />
        <Login />
      </main>
    </div>
  );
}

export default App;
