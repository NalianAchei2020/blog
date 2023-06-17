import './Sass/index.scss'
import {BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
      
    </div>
    </div>
  );
}

export default App;
