import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Main/>
      {/* <Navbar/> */}
      <Login/>
    </div>
  );
}

export default App;
