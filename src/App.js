// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode]=useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='gray'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
  <Navbar mode={mode} toggleMode={toggleMode}/> 
  <div className="container">
  <TextForm heading="Enter the text to analyze below" mode={mode}/>
  </div>
 
  </>
  );
}

export default App; 
