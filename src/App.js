import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  // const[display,setDisplay]=useState(true);
  const[text,setText]=useState("Enable Dark mode");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({msg:message,type:type});
  }
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setText('Enable Light mode')
      document.body.style.backgroundColor='#090b1fd6';
      // setDisplay(false)
      showAlert("Dark mode has been enabled","success");
      document.title="TextEditor - Dark mode";
      // setInterval(() => {
      //   document.title="Install now";
      // }, 2000);
      // setInterval(() => {
      //   document.title="TextEditor is amazing";
      // }, 1500);
    }
    else{
      setMode('light');
      setText('Enable Dark mode')
      document.body.style.backgroundColor='white';
      // setDisplay(true)
      showAlert("Light mode has been enabled","success");
      document.title="TextEditor - Light mode";
    }
  }
  return (
   <>
    <Router>
    <Navbar title="Text editor" ty="About" mode={mode} toggleMode={toggleMode} text={text}/>
    <Alert alert={alert}/>
    <Routes>
          <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
          <Route exact path='/' element={<TextForm heading="enter text to analyze"mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
    </Routes>
    </Router>
    {/* <About/> */}
   </>
  );
}
export default App;
