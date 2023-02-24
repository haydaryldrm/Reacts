import Homepage from './Homepage';
import './App.css';
import { Route,Link ,Routes } from 'react-router-dom';
import { useState } from 'react';
import Countries from './countries';
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  var styleing;
  if(theme=== "light"){
   styleing = {
    div : {
      backgroundColor : "#ECF9FF",
      color : "#20262E"
    }
  } 
  }
  else{
    styleing = {
      div : {
        backgroundColor : "#20262E",
        color : "#ECF9FF"
      }
    } 
  }
  
  return (
    
    <div className="App">
      <nav className="nav" style={styleing.div}>
        <h1 className='nav-item' >My Website</h1>
        <Link to="/" className='nav-item' style={styleing.div}>Homepage</Link>
        <Link to="/countries" className='nav-item' style={styleing.div}>Countries</Link>
        <Link to="/" className='nav-item' style={styleing.div}>Contact</Link>
        <button className='nav-button' onClick={toggleTheme} style={styleing.div}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage theme={theme}/>}/>
        <Route path='/countries' element={<Countries theme={theme}/>}/>
      </Routes>
      
      <footer style={styleing.div}>
        <div>
          <p>Copyright © 2023</p>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
