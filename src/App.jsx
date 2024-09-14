import React from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    default: 
      component = <Home />;
      break;
    case '/About':
      component = <About />;
      break;
    case '/Portfolio':
      component = <Portfolio />;
      break;
    case '/Contact':
      component = <Contact />;
      break;

  }
  return (
    <>
     <Navbar />
     {component}
    
      
    </>

  );
}

export default App;