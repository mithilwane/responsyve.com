import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from "@emailjs/browser";
import { useEffect } from 'react';


function App() {
  useEffect(() => emailjs.init("nxekFQhMkOx8IFnvc"), []);
  return (    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>      
      </BrowserRouter>    
    </div>
  );
}

export default App;
