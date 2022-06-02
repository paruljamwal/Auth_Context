
import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import User from './Components/User';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <User/>
    </div>
  );
}

export default App;
