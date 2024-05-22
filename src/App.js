import logo from './logo.svg';
import './App.css';
import Card from "./Card.js";
import About from "./About";
import Contact from "./Contact";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/contact" className='nav-item'>Contact Us</Link>
      </nav>
      <Routes> 
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>XYZ Company</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

        <Card 
          heading="How we started" 
          content="We started as a small startup in the year 2005, with a vision to innovate and transform the tech industry. Over the years, our relentless pursuit of excellence and commitment to cutting-edge technology has propelled us from a modest beginning to a leading name in the field. Today, we are proud to have a global presence, delivering groundbreaking solutions and services that empower businesses and individuals alike. Our journey is a testament to the power of innovation, dedication, and a passion for pushing boundaries."
          className="intro-card"
        />

        <Card 
          content="Welcome"
          className="welcome-card"
        />

        <Card 
          content="Created using react"
          className="create-card"
        />

        <Card 
          image={logo}
          className="logo-card"
        />
    </div>
  );
}

export default App;
