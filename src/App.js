import './styles/App.css';
import {Routes , Route, Link} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
<h1>hey</h1>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
