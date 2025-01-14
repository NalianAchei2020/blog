/* eslint-disable react/jsx-no-bind */
import './Sass/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/home';
import Footer from './Components/footer';
import Contact from './pages/contact';
import Book from './pages/book';
import Blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Book />} />
            <Route path="/:title" element={<Blog />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
