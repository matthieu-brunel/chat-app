import React from 'react';
import Contact from './components/Contact';
import './App.css';

const Person1 = {
Name: "Cortex_saeko",
Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/Cortex_Saeko.png",
Online: true,
}

const Person2 = {
  Name: "Ext-_-taZz_",
  Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/ExT-_-TaZz_.png",
  Online: false,
}

const Person3 = {
  Name: "SmithOrange",
  Avatar: "https://avatar-cdn.tracker.gg/api/avatar/2/SmithOrange.png",
  Online: true,
}



function App() {
  return (
    <div className="App">
      <Contact {...Person1}/>
      <Contact {...Person2}/>
      <Contact {...Person3}/>
     
 </div>
)
 
}

export default App;
