/* eslint-disable react/jsx-no-bind */
import './Sass/index.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/home';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
