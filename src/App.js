import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import Post from './Post';
import Details from './Details';
import Notfound from './Notfound';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content content-wrap">
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/post" element={<Post />} />
            <Route path= "/items/:id" element={<Details />} />
            <Route path= "/about" element={<About />} />
            <Route path= "/contact" element={<Contact />} />
            <Route path= "*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
