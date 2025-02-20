import { useState, useEffect, createRef } from 'react'
import './App.css'
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import AboutMe from './pages/about-me';
import Background from "./pages/background";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Null from "./pages/null";

function App() {
  const [current_page, setCurrentPage] = useState("Home");

  const generateRoutes = () => {
    let key = 0;
    return [
      <Route key={++key} path="/About-Me" element={<AboutMe></AboutMe>} />,
      <Route key={++key} path="/Background" element={<Background></Background>} />,
      <Route key={++key} path="/" element={<Home setCurrentPage={setCurrentPage}></Home>} />,
      <Route key={++key} index element={<Home setCurrentPage={setCurrentPage}></Home>} />,
      <Route key={++key} path="/Home" element={<Home setCurrentPage={setCurrentPage}></Home>} />,
      <Route key={++key} path="/Portfolio" element={<Portfolio></Portfolio>} />,
      <Route key={++key} path="*" element = {<Null></Null>} />
    ];
  }

  useEffect(() => {
    window.onload = () => {
      const domain = window.location.href.split("/").slice(3).join("/");
      if (domain == "") setCurrentPage("Home");
      else setCurrentPage(domain);
    }
  }, []);


  return (
    <div className='main'>
      <Navbar 
        setCurrentPage={setCurrentPage}
      />
      <div className='domain'>
        <Routes>
          {generateRoutes()}
        </Routes>
      </div>
    </div>
  )
}

export default App