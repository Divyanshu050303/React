// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/alert'

function App() {
  const [mode, setMode]=useState('light')
  const [alert, setAlert]=useState(null)
  const showAlert=(message, type)=>{
      setAlert({message:message, type:type})
      setTimeout(()=>{
        setAlert(null);
      },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#022d58'
      showAlert(' Dark mode has been enabled','success  ')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert(' Light mode has been enabled','success ')
    }
  }
  return (
    <>
  <Navbar mode={mode} toggleMode={toggleMode}/> 
  <Alert alert={alert}/>
  <div className="container">
  <TextForm showAlert={showAlert}  heading="Enter the text to analyze below" mode={mode}/>
  </div>
 
  </>
  );
}

export default App; 
