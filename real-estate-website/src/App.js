import React from 'react';
import Header from './Components/Header';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Aegents from './Components/Aegents';
import Properties from './Components/Propertyes';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Howitwork/>
      <About/>
      <Aegents/>
      <Properties/>
      <Contact/>
    </div>
  );
}

export default App;
