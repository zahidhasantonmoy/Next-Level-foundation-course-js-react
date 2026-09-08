import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx' 
import Header from './Header.jsx'
import Content from './Content.jsx'
function App() {
 return ( 
  <>
  <Greeting></Greeting>
  <Header></Header> 
  <Content></Content>

  </>
  );
}

export default App
